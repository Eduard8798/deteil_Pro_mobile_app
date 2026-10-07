import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AppNavigationProp} from "../../navigation/types/types";
import {useCreateOrderMutation} from "../../store/endpoints/orderApi";
import {useState} from "react";
import {CameraType, CameraView, useCameraPermissions} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import {uploadImageToCloudinary} from "../../services/cloudinary";

interface ICreateOrderScreenProps {
    navigation: AppNavigationProp;
}

const CreateOrderScreen = ({navigation}: ICreateOrderScreenProps) => {
    const [createOrder, {isLoading}] = useCreateOrderMutation();


    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [message, SetMessage] = useState<string>('');

    const takePhoto = async () => {
        console.log('1. takePhoto START');

        const permission =
            await ImagePicker.requestCameraPermissionsAsync();

        console.log('2. permission:', permission);

        if (!permission.granted) {
            console.log('3. permission DENIED');
            return;
        }

        console.log('4. permission GRANTED');

        const result =
            await ImagePicker.launchCameraAsync({
                mediaTypes: ['images'],
                quality: 0.8,
            });

        console.log('5. camera result:', result);

        if (result.canceled) {
            console.log('6. USER CANCELED');
            return;
        }

        console.log('7. PHOTO:', result.assets[0]);

        setPhotoUri(result.assets[0].uri);

        console.log(
            '8. PHOTO URI:',
            result.assets[0].uri,
        );
    };

    const handleCreateOrder = async () => {

        if (!photoUri) {
            return;
        }

        try {

            // 1. Фото → Cloudinary
            const photoUrl =
                await uploadImageToCloudinary(photoUri);

            console.log('Cloudinary URL:', photoUrl);

            // 2. Cloudinary URL → NestJS
            await createOrder({
                message,
                url_photo: photoUrl,
            }).unwrap();

            console.log('Order created');

        } catch (error) {

            console.error(
                'Create order error:',
                error,
            );
        }
    };
    return (
        <View style={styles.container}>
            <Button
                title="Upload to Cloudinary"
                onPress={handleCreateOrder}
            />
            <Button
                title="Сделать фото"
                onPress={takePhoto}
            />


        </View>
    )
}
export default CreateOrderScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 64,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: '100%',
        paddingHorizontal: 64,
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});