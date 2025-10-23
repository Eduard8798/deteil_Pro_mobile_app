import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from "react-native-maps";

interface MapScreenProps {

}

const MapScreen: FC<MapScreenProps> = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}/>
        </View>

    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 100,

    },
    map: {
        width: '100%',
        height: '100%',
    },
});
