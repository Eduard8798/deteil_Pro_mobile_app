// BookingScreen.tsx
import React, { FC, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Alert,
    Platform,
    Modal,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "../../navigation/MyTabs";

const SERVICES = [
    { id: 'wash', title: 'Washing' },
    { id: 'detailing', title: 'Detailing' },
    { id: 'polish', title: 'Polishing' },
    { id: 'ceramic', title: 'Application of ceramics' },
    { id: 'vacuum', title: 'Dry cleaning / Vacuum cleaning' },
    { id: 'toner', title: 'Window tinting' },
];

type BookingScreenProp = BottomTabNavigationProp<RootTabParamList, 'BookingScreen'>;

interface Booking {
    serviceId: string;
    serviceTitle: string;
    name: string;
    phone: string;
    datetime: Date;
    note?: string;

}

interface BookingProp {
    navigation: BookingScreenProp;

}




const BookingScreen: FC<BookingProp> = ({navigation}) => {
    const [selectedService, setSelectedService] = useState(SERVICES[0]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');
    const [datetime, setDatetime] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showServiceModal, setShowServiceModal] = useState(false);

    const onChangeDate = (event: Event, selected?: Date | undefined) => {
        setShowDatePicker(Platform.OS === 'ios'); // on android close after selection
        if (selected) setDatetime(selected);
    };

    const validateAndSubmit = () => {
        if (!name.trim()) {
            Alert.alert('Error', 'Enter name');
            return;
        }
        if (!phone.trim()) {
            Alert.alert('Error', 'Enter number phone');
            return;
        }
        if (!selectedService) {
            Alert.alert('Error', 'Chose of service');
            return;
        }

        const booking: Booking = {
            serviceId: selectedService.id,
            serviceTitle: selectedService.title,
            name: name.trim(),
            phone: phone.trim(),
            datetime,
            note: note.trim(),
        };

        // TODO: заменить на реальный API-запрос
        console.log('Send booking:', booking);

        Alert.alert(
            'Ready',
            `Your appointment for ${booking.serviceTitle} has been accepted.\nDate: ${booking.datetime.toLocaleString()}`,
            [{ text: 'OK', onPress: () => clearForm() }]
        );
    };

    const clearForm = () => {
        setSelectedService(SERVICES[0]);
        setName('');
        setPhone('');
        setNote('');
        setDatetime(new Date());
    };
//add
    return (
        <View style={styles.safe}>
            <Text style={styles.header}>Registration service</Text>

            <View style={styles.section}>
                <Text style={styles.label}>Service</Text>
                <Pressable style={styles.selector} onPress={() => setShowServiceModal(true)}>
                    <Text style={styles.selectorText}>{selectedService.title}</Text>
                    <Text style={styles.selectorArrow}>▾</Text>
                </Pressable>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Date&time</Text>
                <Pressable style={styles.selector} onPress={() => setShowDatePicker(true)}>
                    <Text style={styles.selectorText}>{datetime.toLocaleString()}</Text>
                    <Text style={styles.selectorArrow}>▾</Text>
                </Pressable>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Jack"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Phone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="380XXXXXXXXX"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Note (optional)</Text>
                <TextInput
                    style={[styles.input, { height: 90 }]}
                    placeholder="For example: I wish in the morning hours"
                    multiline
                    value={note}
                    onChangeText={setNote}
                />
            </View>

            <Pressable style={styles.primaryButton} onPress={validateAndSubmit}>
                <Text style={styles.primaryButtonText}>Create appointment</Text>
            </Pressable>

            <Pressable style={styles.primaryButton}  onPress={()=> navigation.navigate('Profile')}>
                <Text style={styles.primaryButtonText}>Cancel</Text>
            </Pressable>

            {/* Service modal */}
            <Modal visible={showServiceModal} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Выберите услугу</Text>
                        <FlatList
                            data={SERVICES}
                            keyExtractor={(it) => it.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.modalItem,
                                        item.id === selectedService.id && styles.modalItemSelected,
                                    ]}
                                    onPress={() => {
                                        setSelectedService(item);
                                        setShowServiceModal(false);
                                    }}
                                >
                                    <Text style={styles.modalItemText}>{item.title}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <Pressable style={styles.modalClose} onPress={() => setShowServiceModal(false)}>
                            <Text style={styles.modalCloseText}>Отмена</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* DateTime Picker */}
            {showDatePicker && (
                <DateTimePicker
                    value={datetime}
                    mode="datetime"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={ ()=> onChangeDate}
                    minimumDate={new Date()}
                />
            )}
        </View>
    );
};

export default BookingScreen;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        padding: 20,
        paddingTop:100,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 18,
        textAlign: 'center',

    },
    section: {
        marginBottom: 14,

    },
    label: {
        fontSize: 13,
        color: '#374151',
        marginBottom: 6,

    },
    selector: {
        height: 48,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 10,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FAFAFB',

    },
    selectorText: {
        fontSize: 16,
        color: '#111827',


    },
    selectorArrow: {
        color: '#6B7280',

    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#FFF',
        fontSize: 16,
        color: '#111827',

    },
    primaryButton: {
        height: 48,
        borderRadius: 10,
        backgroundColor: '#111827',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },

    /* Modal */
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.35)',
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 28,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        maxHeight: '60%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    modalItem: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    modalItemSelected: {
        backgroundColor: '#F3F4F6',
    },
    modalItemText: {
        fontSize: 16,
    },
    modalClose: {
        marginTop: 12,
        alignSelf: 'center',
    },
    modalCloseText: {
        color: '#2563EB',
        fontSize: 16,
    },
});
