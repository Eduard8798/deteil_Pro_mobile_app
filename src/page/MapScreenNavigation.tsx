import React, {FC} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

interface MapScreenNavigationProps {

}

const MapScreenNavigation: FC<MapScreenNavigationProps> = () => {
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
                    <Text style={styles.textUrlNavigation}>Знайти мийку</Text>
                    <Text style={[styles.textUrlNavigation , {color:'#4ed5c1'}]}>Черкаси</Text>
                    <Text style={styles.textUrlNavigation}>3.3км</Text>
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
        shadowOpacity: 0.3,
        shadowRadius: 5,
        position:'relative'

    },
    textOverlay: {
        borderRadius: 12,
        borderWidth: 1,
        width: 200,
        height: 130,
        // backgroundColor: '#f6f6f6',
        backgroundColor: 'rgba(0,0,0,0.8)',
        position:'absolute'

    },
    textUrlNavigation:{
        margin:3,
        textAlign:'center',
        padding:5,
        top:8,
        fontWeight: 'bold',
        color:'#f6f6f6'
    }

});
