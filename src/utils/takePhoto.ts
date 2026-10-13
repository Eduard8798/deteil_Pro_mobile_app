import * as ImagePicker from 'expo-image-picker';
import {Alert} from "react-native";


export const takePhoto = async (): Promise<string | null> => {

    let permission = await ImagePicker.getCameraPermissionsAsync();


    if (!permission.granted) {
        permission = await ImagePicker.requestCameraPermissionsAsync();
    }
    if (!permission.granted) {
        Alert.alert('Error', 'Camera access required');
        return null;
    }

    const result =
        await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            quality: 0.8,
        });

    if (result.canceled || !result.assets?.length) {
        return null;
    }

    return (result.assets[0].uri);
};