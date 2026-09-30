import React, {FC, useState} from 'react';
import {View, Pressable, StyleSheet, Text, TextInput} from 'react-native';
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "../../navigation/RootStack";
import {Alert} from "react-native";


type RegistrationScreen = BottomTabNavigationProp<RootStackParamList, 'RegistrationScreen'>;

interface RegistrationScreenProps {
    navigation: RegistrationScreen;
}

const RegistrationScreen: FC<RegistrationScreenProps> = ({navigation}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!phone || !password) {
            Alert.alert('Error, please fill in all fields');
            // return;
        }

    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create account</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="Artur"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Number"
                placeholderTextColor="#999"
                keyboardType="number-pad"
                autoCapitalize="none"
                value={phone}
                onChangeText={setPhone}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
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
