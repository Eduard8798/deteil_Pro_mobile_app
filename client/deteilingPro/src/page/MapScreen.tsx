import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import * as Location from 'expo-location';

interface MapScreenProps {

}

const MapScreen: FC<MapScreenProps> = () => {

    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);

    useEffect(() => {
        async function getCurrentLocation() {

            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }

        getCurrentLocation();
    }, []);

    useEffect(() => {
        if (errorMsg) {
            Alert.alert("Помилка з доступом локації");
        } else if (location) {

            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);

        }
    }, [location])
    useEffect(() => {
        if (latitude && longitude) {
            console.log('Updated latitude:', latitude, 'Updated longitude:', longitude);
        }
    }, [latitude, longitude]);



    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                     initialRegion={{
                         latitude: latitude || 0,
                         longitude: longitude || 0,
                         latitudeDelta: 0.05,
                         longitudeDelta: 0.05,
                     }}
            >
                {latitude && longitude && (
                    <Marker coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}/>
                )}


            </MapView>

        </View>

    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        // width: 300,
        // height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    map: {
        width: '100%',
        height: '100%',
    },
});
