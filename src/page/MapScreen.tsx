import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Alert, ActivityIndicator, Pressable} from 'react-native';
import MapView, {Marker, Region} from "react-native-maps";
import * as Location from 'expo-location';
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons';

interface MapScreenProps {

}

interface MapMarker{
    latitude:number;
    longitude:number;
}
const MapScreen: FC<MapScreenProps> = () => {

    const navigation = useNavigation();

    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [region, setRegion] = useState<Region | null>(null);
    const [marker,setMarker] = useState<MapMarker | null>(null);

    useEffect(() => {
        async function getCurrentLocation() {

            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            });
            setMarker({latitude:49.411389,longitude:32.068693})
        }

        getCurrentLocation();
    }, []);

    useEffect(() => {
        if (errorMsg) {
            Alert.alert("Помилка з доступом локації");
        }
    }, [errorMsg])

    if (!region) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="blue"/>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={28} color="black" />
            </Pressable>
            <MapView style={styles.map}
                     region={region}
            >
                {marker && (
                <Marker coordinate={{
                    latitude: marker?.latitude,
                    longitude: marker?.longitude
                }}/>
                )}


            </MapView>

        </View>

    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    map: {
        width: '100%',
        height: '100%',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 6,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 3,
    },
});
