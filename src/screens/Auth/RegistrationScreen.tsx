import React, {FC, useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "../../navigation/RootStack";
import {useRegistrationMutation} from "../../store/endpoints/authApi";
import {Registration} from "../../store/type/type";
import asyncStorage from "@react-native-async-storage/async-storage";


type RegistrationScreen = BottomTabNavigationProp<RootStackParamList, 'RegistrationScreen'>;

interface RegistrationScreenProps {
    navigation: RegistrationScreen;
}

const RegistrationScreen: FC<RegistrationScreenProps> = ({navigation}) => {


    const [dataForm, setDataForm] = useState<Registration>({
        name:'',
        phone:'',
        password:''
    });
    const [registration] = useRegistrationMutation();

    const handleLogin = async () => {
        try {
            if (!dataForm.phone || !dataForm.password || !dataForm.name) {
                Alert.alert('Error, please fill in all fields');
                return;
            }
            const result = await registration(
                dataForm
            ).unwrap()

            if (result.accessToken) {
                asyncStorage.setItem('accessToken', result.accessToken)
            }
            if (result.refreshToken) {

                asyncStorage.setItem('refreshToken', result.refreshToken)
            }
            if (result.refreshToken && result.accessToken) {
                navigation.navigate('ListApplicationsScreen')
            }
        }
        catch (e){
            console.log('Error', e)
        }

    };

    const changeValueDataLogin = (field: keyof Registration,
                                  value: string) => {
        setDataForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create account</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="Artur"
                value={dataForm.name}
                onChangeText={(text)=> {changeValueDataLogin('name',text)}}
            />

            <TextInput
                style={styles.input}
                placeholder="Number"
                placeholderTextColor="#999"
                keyboardType="number-pad"
                autoCapitalize="none"
                value={dataForm.phone}
                onChangeText={(text)=> {changeValueDataLogin('phone',text)}}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                value={dataForm.password}
                onChangeText={(text)=> {changeValueDataLogin('password',text)}}
            />

            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText} onPress={()=>navigation.navigate('CreateOrderScreen')}>Register</Text>
            </Pressable>

            <Text style={styles.link}
                  onPress={() => navigation.navigate('ProfileScreen')}
            >Back</Text>
        </View>

    );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 32,
        color: '#222',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    link: {
        marginTop: 16,
        color: '#007AFF',
    },
});
