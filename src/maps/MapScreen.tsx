import React, { FC, useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    ActivityIndicator,
    Pressable,
    Linking,
    Platform,
} from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface MapMarker {
    latitude: number;
    longitude: number;
}

const STUDIO_LOCATION: MapMarker = {
    latitude: 49.411389,
    longitude: 32.068693,
};

const MapScreen: FC = () => {
    const navigation = useNavigation();
    const mapRef = useRef<MapView>(null);

    const [location, setLocation] =
        useState<Location.LocationObject | null>(null);

    const [region, setRegion] = useState<Region | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCurrentLocation = async () => {
            try {
                const { status } =
                    await Location.requestForegroundPermissionsAsync();

                if (status !== 'granted') {
                    Alert.alert(
                        'Access to geolocation',
                        'Allow access to geolocation in your phone settings to get directions.',
                    );
                    return;
                }

                const currentLocation =
                    await Location.getCurrentPositionAsync({
                        accuracy: Location.Accuracy.High,
                    });

                setLocation(currentLocation);

                const userLat = currentLocation.coords.latitude;
                const userLng = currentLocation.coords.longitude;

                // Показуємо на карті і користувача, і студію
                const latitudeDelta =
                    Math.abs(userLat - STUDIO_LOCATION.latitude) * 1.5 + 0.02;

                const longitudeDelta =
                    Math.abs(userLng - STUDIO_LOCATION.longitude) * 1.5 + 0.02;

                setRegion({
                    latitude: (userLat + STUDIO_LOCATION.latitude) / 2,
                    longitude: (userLng + STUDIO_LOCATION.longitude) / 2,
                    latitudeDelta: Math.max(latitudeDelta, 0.03),
                    longitudeDelta: Math.max(longitudeDelta, 0.03),
                });
            } catch (error) {
                console.error('Location error:', error);
                Alert.alert(
                    'Error',
                    'Unable to get your location. Check your GPS and try again.',
                );
            } finally {
                setLoading(false);
            }
        };

        getCurrentLocation();
    }, []);

    const handleBuildRoute = async () => {
        if (!location) {
            Alert.alert(
                'Geolocation unavailable',
                'Unable to determine your current location.',
            );
            return;
        }

        const { latitude, longitude } = location.coords;

        // Відкриваємо зовнішню навігацію з поточними координатами
        const url =
            Platform.OS === 'ios'
                ? `https://maps.apple.com/?saddr=${latitude},${longitude}&daddr=${STUDIO_LOCATION.latitude},${STUDIO_LOCATION.longitude}&dirflg=d`
                : `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${STUDIO_LOCATION.latitude},${STUDIO_LOCATION.longitude}&travelmode=driving&dir_action=navigate`;

        try {
            await Linking.openURL(url);
        } catch (error) {
            console.error('Navigation error:', error);
            Alert.alert(
                'Error',
                'Failed to open navigation',
            );
        }
    };

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#F5C400" />
                <Text style={styles.loadingText}>
                    Determining location...
                </Text>
            </View>
        );
    }

    if (!region || !location) {
        return (
            <View style={styles.loader}>
                <Text style={styles.errorText}>
                    Failed to get geolocation.
                </Text>

                <Pressable
                    style={styles.routeButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.routeButtonText}>
                       Back
                    </Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                region={region}
                showsUserLocation
                showsMyLocationButton
            >
                <Marker
                    coordinate={STUDIO_LOCATION}
                    title="Detailing Studio"
                    description="Our Detailing Studio"
                />
            </MapView>

            <Pressable
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons
                    name="arrow-back"
                    size={26}
                    color="#111"
                />
            </Pressable>

            <View style={styles.bottomPanel}>
                <Text style={styles.title}>
                    Directions to the studio
                </Text>

                <Text style={styles.description}>
                    Press the button to open navigation
                    and get driving directions.
                </Text>

                <Pressable
                    style={styles.routeButton}
                    onPress={handleBuildRoute}
                >
                    <Ionicons
                        name="navigate"
                        size={22}
                        color="#111"
                    />
                    <Text style={styles.routeButtonText}>
                        Get directions
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
    },
    map: {
        flex: 1,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        padding: 24,
    },
    loadingText: {
        color: '#FFF',
        marginTop: 12,
    },
    errorText: {
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    backButton: {
        position: 'absolute',
        top: 55,
        left: 20,
        zIndex: 10,
        backgroundColor: '#FFF',
        borderRadius: 30,
        padding: 10,
        elevation: 4,
    },
    bottomPanel: {
        backgroundColor: '#1B1B1B',
        padding: 20,
        paddingBottom: 30,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
    },
    description: {
        color: '#AAA',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 18,
    },
    routeButton: {
        backgroundColor: '#F5C400',
        minHeight: 52,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    routeButtonText: {
        color: '#111',
        fontSize: 16,
        fontWeight: '700',
    },
});