
import { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    ScrollView,
} from 'react-native';

import { useAppSelector } from '../store/storeHooks';
import { useSwitchPasswordMutation } from '../store/endpoints/userApi';
import { UserPasswordRequest } from '../store/type/type';
import {AppNavigationProp} from "../navigation/types/types";


interface IChangePassword {
    navigation: AppNavigationProp;
}

const ChangePassword = ({navigation}:IChangePassword) => {
    const mode = useAppSelector(state => state.theme.mode);

    const [switchPassword] = useSwitchPasswordMutation();

    const [form, setForm] = useState<UserPasswordRequest>({
        phone: '',
        password: '',
    });

    const changePassword = async () => {
        if (!form.phone.trim() || !form.password.trim()) {
            return;
        }

        try {
            await switchPassword(form).unwrap();
            console.log('Password updated successfully');
        } catch (error) {
            console.log('Failed to update password:', error);
        }
    };

    const changeDataForm = (
        field: keyof UserPasswordRequest,
        value: string,
    ) => {
        setForm(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <ScrollView
            style={mode ? styles.container : styles.containerBlack}
        >
            <Pressable
                style={mode ? styles.backButton : styles.backButtonBlack}
                onPress={() => navigation.goBack()}
            >
                <Text style={mode ? styles.backText : styles.backTextBlack}>
                    {'< Back'}
                </Text>
            </Pressable>
            <View style={styles.content}>
                <View style={styles.contentTextBlock}>
                    <Text style={mode ? styles.title : styles.titleBlack}>
                        Смена пароля
                    </Text>
                </View>


                <View style={mode ? styles.form : styles.formBlack}>
                    <Text style={mode ? styles.label : styles.labelBlack}>
                        Твой номер телефона
                    </Text>

                    <TextInput
                        style={mode ? styles.input : styles.inputBlack}
                        placeholder="380XXXXXXXXX"
                        placeholderTextColor={mode ? '#BBBBBB' : '#777777'}
                        keyboardType="phone-pad"
                        value={form.phone}
                        onChangeText={text =>
                            changeDataForm('phone', text)
                        }
                    />

                    <Text style={mode ? styles.label : styles.labelBlack}>
                        Новый пароль
                    </Text>

                    <TextInput
                        style={mode ? styles.input : styles.inputBlack}
                        placeholder="Введи новый пароль"
                        placeholderTextColor={mode ? '#BBBBBB' : '#777777'}
                        secureTextEntry
                        value={form.password}
                        onChangeText={text =>
                            changeDataForm('password', text)
                        }
                    />

                    <Pressable
                        style={mode ? styles.button : styles.buttonBlack}
                        onPress={()=>{changePassword(), navigation.goBack()}}
                    >
                        <Text style={styles.buttonText}>
                            Сменить пароль
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:'20%',
        backgroundColor: '#121212',
    },
    containerBlack: {
        flex: 1,
        paddingTop:'20%',
        backgroundColor: '#F5F5F5',
    },
    content: {
        paddingHorizontal: '5%',
        paddingTop: '5%',

    },
    contentTextBlock:{
        alignItems:'center'
    },
    backButton: {
        alignSelf: 'flex-start',
        paddingLeft:'5%',
        marginBottom: '5%',
    },

    backButtonBlack: {
        alignSelf: 'flex-start',
        paddingLeft:'5%',
        marginBottom: '5%',
    },

    backText: {
        fontSize: 16,
        color: '#FFFFFF',
    },

    backTextBlack: {
        fontSize: 16,
        color: '#222222',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: '6%',
    },
    titleBlack: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222222',
        marginBottom: '6%',
    },
    form: {
        backgroundColor: '#252525',
        padding: '5%',
        borderRadius: 12,
    },
    formBlack: {
        backgroundColor: '#FFFFFF',
        padding: '5%',
        borderRadius: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: '2%',
    },
    labelBlack: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222222',
        marginBottom: '2%',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 8,
        padding: '4%',
        color: '#FFFFFF',
        marginBottom: '6%',
    },
    inputBlack: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        padding: '4%',
        color: '#222222',
        marginBottom: '6%',
    },
    button: {
        width: '100%',
        backgroundColor: '#444444',
        paddingVertical: '4%',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonBlack: {
        width: '100%',
        backgroundColor: '#222222',
        paddingVertical: '4%',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
});

export default ChangePassword;
