import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AppNavigationProp} from "../../navigation/types/types";
import {useCreateOrderMutation} from "../../store/endpoints/orderApi";
import {useState} from "react";
import {CameraType, CameraView, useCameraPermissions} from 'expo-camera';


interface ICreateOrderScreenProps {
    navigation: AppNavigationProp;
}

const CreateOrderScreen = ({navigation}: ICreateOrderScreenProps) => {
    const [createOrder, {isLoading}] = useCreateOrderMutation();

    const [description, setDescription] = useState('');
    const [images, setImages] = useState<string[]>([]);

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return null;
    }
    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                    <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
            </View>
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