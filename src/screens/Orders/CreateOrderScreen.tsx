import {
    Alert, Button, KeyboardAvoidingView,
    Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View
} from "react-native";
import {AppNavigationProp} from "../../navigation/types/types";
import {useCreateOrderMutation} from "../../store/endpoints/orderApi";
import {useEffect, useState} from "react";
import {uploadImageToCloudinary} from "../../services/cloudinary";
import {takePhoto} from "../../utils/takePhoto";
import {Dropdown} from 'react-native-element-dropdown';
import {useAppSelector} from "../../store/storeHooks";


interface ICreateOrderScreenProps {
    navigation: AppNavigationProp;
}

const CreateOrderScreen = ({navigation}: ICreateOrderScreenProps) => {
    const [createOrder, {isLoading: isCreating}] = useCreateOrderMutation();
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [message, setMessage] = useState<string>('');

    const mode = useAppSelector(
        state => state.theme.mode
    );

    const handleTakePhoto = async () => {
        try {

            const uri = await takePhoto();
            if (uri) {
                setPhotoUri(uri);
            }

        } catch (error) {
            console.error('Camera error:', error);
        }
    };

    const handleCreateOrder = async () => {
        const finalMessage = message.trim();

        if (!photoUri) {
            Alert.alert('Ошибка', 'Сначала выбери фотографию');
            return;
        }

        if (!finalMessage) {
            Alert.alert('Ошибка', 'Выбери услугу или введи описание');
            return;
        }
        try {
            const photoUrl = await uploadImageToCloudinary(photoUri);
            const response = await createOrder({message: message.trim(), url_photo: photoUrl,}).unwrap();
            navigation.goBack();
            console.log('Order created successfully');
            console.log('response', response);
        } catch (error) {
            console.error('Create order error:', error);
        }
    };


    const data = [
        {label: 'Paint protection film application', value: 'ppf'},
        {label: 'Vacuuming service', value: 'vacuuming'},
        {label: 'Window tinting', value: 'window_tinting'},
        {label: 'Ceramic coating', value: 'ceramic_coating'},
        {label: 'Interior detailing', value: 'interior_detailing'},
        {label: 'Polishing', value: 'polishing'},
    ];

    useEffect(() => {
        console.log('message', message)
        console.log('photoUri', photoUri)
    }, [message, photoUri])

    return (
        <SafeAreaView style={mode ? styles.safeArea : styles.safeAreaBlack}>
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={mode ? styles.scrollContent : styles.scrollContentBlack}
                    keyboardShouldPersistTaps="handled"
                >
                    <Pressable
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>‹ Back</Text>
                    </Pressable>
                    <View style={styles.header}>
                        <Text style={mode ? styles.headerTitle : styles.headerTitleBlack}>Create Order</Text>
                        <Text style={mode ? styles.subtitle : styles.subtitleBlack}>
                            Tell us what your car needs
                        </Text>
                    </View>

                    <Pressable
                        style={styles.photoCard}
                        onPress={handleTakePhoto}
                    >
                        <Text style={styles.cameraIcon}>📷</Text>
                        <Text style={styles.photoTitle}>
                            Take a photo
                        </Text>
                        <Text style={styles.photoSubtitle}>
                            Add a photo of your vehicle
                        </Text>
                    </Pressable>

                    <View style={styles.section}>
                        <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
                            Service
                        </Text>

                        <View style={styles.dropdownContainer}>
                            <Dropdown
                                style={styles.dropdown}
                                placeholder="Choose a service"
                                data={data}
                                labelField="label"
                                valueField="value"
                                value={message}
                                onChange={item => setMessage(item.value)}
                                placeholderStyle={styles.placeholder}
                                selectedTextStyle={styles.selectedText}
                                itemTextStyle={styles.itemText}
                            />
                        </View>

                        <View style={styles.orContainer}>
                            <View style={styles.separator} />
                            <Text style={styles.orText}>OR</Text>
                            <View style={styles.separator} />
                        </View>

                        <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
                            Additional details
                        </Text>

                        <TextInput
                            style={styles.descriptionInput}
                            placeholder="Describe the service you need..."
                            placeholderTextColor="#8E8E93"
                            value={message}
                            onChangeText={setMessage}
                            multiline
                            textAlignVertical="top"
                        />
                    </View>
                </ScrollView>

                <View style={mode ? styles.footer : styles.footerBlack}>
                    <Pressable
                        style={({ pressed }) => [
                            styles.createButton,
                            pressed && styles.createButtonPressed,
                            isCreating && styles.createButtonDisabled,
                        ]}
                        disabled={isCreating}
                        onPress={handleCreateOrder}
                    >
                        <Text style={styles.createButtonText}>
                            {isCreating ? 'Creating...' : 'Create Order'}
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default CreateOrderScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F2F2F7',
    },
    safeAreaBlack: {
        flex: 1,
        backgroundColor: '#030304',
    },
    flex: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 24,
    },
    scrollContentBlack: {
        backgroundColor:'#030304',
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 24,
    },
    header: {
        marginBottom: 28,
    },
    backButton: {
        alignSelf: 'flex-start',
        paddingVertical: 8,
        paddingRight: 16,
        marginBottom: 16,
    },

    backButtonText: {
        color: '#007AFF',
        fontSize: 17,
        fontWeight: '400',
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: '700',
        color: '#1C1C1E',
        letterSpacing: -0.5,
    },
    headerTitleBlack: {
        fontSize: 30,
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: -0.5,
    },
    subtitle: {
        marginTop: 6,
        fontSize: 15,
        color: '#8E8E93',
    },
    subtitleBlack: {
        marginTop: 6,
        fontSize: 15,
        color: '#8E8E93',
    },
    photoCard: {
        minHeight: 190,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        marginBottom: 30,
    },
    cameraIcon: {
        fontSize: 38,
        marginBottom: 12,
    },
    photoTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#007AFF',
    },
    photoSubtitle: {
        marginTop: 6,
        fontSize: 13,
        color: '#8E8E93',
    },
    section: {
        gap: 12,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1C1C1E',
        marginBottom: 2,
    },
    sectionTitleBlack: {
        fontSize: 17,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 2,
    },
    dropdownContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#D1D1D6',
        paddingHorizontal: 14,
    },
    dropdown: {
        height: 54,
    },
    placeholder: {
        fontSize: 16,
        color: '#8E8E93',
    },
    selectedText: {
        fontSize: 16,
        color: '#1C1C1E',
    },
    itemText: {
        fontSize: 16,
        color: '#1C1C1E',
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginVertical: 8,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#D1D1D6',
    },
    orText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#8E8E93',
    },
    descriptionInput: {
        minHeight: 110,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D1D1D6',
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        color: '#1C1C1E',
    },
    footer: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 16,
        backgroundColor: '#F2F2F7',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#D1D1D6',
    },
    footerBlack: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 16,
        backgroundColor: '#030304',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#030304',
    },
    createButton: {
        minHeight: 54,
        borderRadius: 14,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    createButtonPressed: {
        backgroundColor: '#0063D1',
        opacity: 0.85,
    },
    createButtonDisabled: {
        opacity: 0.55,
    },
    createButtonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '600',
    },
});
