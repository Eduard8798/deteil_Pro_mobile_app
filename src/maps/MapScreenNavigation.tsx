import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text, Alert, ActivityIndicator} from 'react-native';
import {calculateDistance} from "../utils/calculateDistance";
import * as Location from 'expo-location';

const STUDIO = {
    id: 1,
    name: 'Detailing Studio',
    latitude: 49.411389,
    longitude: 32.068693,
};


const MapScreenNavigation = () => {
    const [distance, setDistance] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDistance = async () => {
            try {
                const {status} =
                    await Location.requestForegroundPermissionsAsync();

                if (status !== 'granted') {
                    Alert.alert(
                        'Geolocation',
                        'Allow access to your location to see the distance.',
                    );
                    return;
                }

                const currentLocation =
                    await Location.getCurrentPositionAsync({
                        accuracy: Location.Accuracy.Balanced,
                    });

                const result = calculateDistance(
                    {
                        latitude: currentLocation.coords.latitude,
                        longitude: currentLocation.coords.longitude,
                    },
                    {
                        latitude: STUDIO.latitude,
                        longitude: STUDIO.longitude,
                    },
                );

                setDistance(result);
            } catch (error) {
                console.error('Distance calculation error:', error);
            } finally {
                setLoading(false);
            }
        };

        getDistance();
    }, []);

    return (
        <View style={styles.container}>


            <View style={styles.imageShadow}>

                <Image
                    source={{
                        uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761337998/IMG_5407_nvsfb9.jpg',
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View style={styles.textOverlay}>
                    <Text style={styles.textNameStudio}>
                        {STUDIO.name}
                    </Text>
                    {loading ? (
                        <ActivityIndicator/>
                    ) : distance !== null ? (
                        <View style={styles.textToDistanceWithKm}>
                            <Text style={styles.textDistanceStudio}>
                                Distance:
                            </Text>
                            <Text style={styles.textDistanceKmStudio}>
                                {distance.toFixed(1)} км
                            </Text>
                        </View>

                    ) : (
                        <Text style={styles.textDistanceStudio}>Distance unavailable</Text>
                    )}
                    {/*<Text style={styles.textUrlNavigation}>Знайти мийку</Text>*/}
                    {/*<Text style={[styles.textUrlNavigation , {color:'#4ed5c1'}]}>Черкаси</Text>*/}
                    {/*<Text style={styles.textUrlNavigation}>3.3км</Text>*/}
                </View>
            </View>
        </View>
    );
};

export default MapScreenNavigation;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 130,
        borderRadius: 12,



    },
    imageShadow: {
        shadowColor: '#000',
        shadowOffset: {width: 3, height: 5},
        shadowOpacity:1,
        shadowRadius: 5,
        position: 'relative'

    },
    textOverlay: {
        borderRadius: 12,
        borderWidth: 1,
        width: 200,
        height: 130,
        // backgroundColor: '#f6f6f6',
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'absolute'

    },
    textUrlNavigation: {
        margin: 3,
        textAlign: 'center',
        padding: 5,
        top: 8,
        fontWeight: 'bold',
        color: '#f6f6f6'
    },
    textNameStudio: {
        fontSize: 20, fontWeight: 'bold', textAlign: "center", color: '#f3f3f3', padding: 5,
        top: 8,
    },
    textToDistanceWithKm: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDistanceStudio: {
        fontWeight: 'bold', textAlign: "center", color: '#ffffff', padding: 5,
        top: 8,
    },
    textDistanceKmStudio: {
        fontWeight: 'bold', textAlign: "center", color: '#98ef40', padding: 5,
        top: 8,
    }

});
