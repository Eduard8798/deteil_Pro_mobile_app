import React, {FC} from 'react';
import {Animated, ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "../navigation/RootStack";
import ScrollView = Animated.ScrollView;


type WashScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'ArmoredFilm'>;

interface ProfileScreenProps {
    navigation: WashScreenNavigationProp;
}

const WashScreen: FC<ProfileScreenProps> = ({navigation}) => {



    return (
        <ScrollView style={styles.container}
                    contentContainerStyle={styles.contentContainer}
        >
            <Pressable onPress={() => navigation.navigate('ArmoredFilm')}>
            <ImageBackground
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/gluing_armored_film_lu6tgt.webp',
                }}
                style={styles.image}
                imageStyle={styles.imageInner} // можно округлить углы
            >
                <View style={styles.overlay}>
                    <Text style={styles.text}>Поклейка бронеплёнки</Text>
                </View>
            </ImageBackground>
            </Pressable>

            <ImageBackground
            source={{
                uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/interior_vacuum_cleaner_sw1dlv.jpg',
            }}
            style={styles.image}
            imageStyle={styles.imageInner} // можно округлить углы
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Послуга пилососа</Text>
            </View>
        </ImageBackground>
            <ImageBackground
            source={{
                uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765527/toner_zgimzk.jpg',
            }}
            style={styles.image}
            imageStyle={styles.imageInner} // можно округлить углы
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Тонування</Text>
            </View>
        </ImageBackground>
            <ImageBackground
            source={{
                uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/keramic_pynt1o.jpg',
            }}
            style={styles.image}
            imageStyle={styles.imageInner} // можно округлить углы
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Кераміка</Text>
            </View>
        </ImageBackground>

            <ImageBackground
            source={{
                uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/dry_cleaning_uiigbp.webp',
            }}
            style={styles.image}
            imageStyle={styles.imageInner} // можно округлить углы
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Хімчистка</Text>
            </View>
        </ImageBackground>
            <ImageBackground
            source={{
                uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/1qb33ngtv1t58jfyp2uy6mjn071y7q7c_bbtaiw.jpg',
            }}
            style={styles.image}
            imageStyle={styles.imageInner} // можно округлить углы
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Полірування</Text>
            </View>
        </ImageBackground>
        </ScrollView>
    );
};

export default WashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contentContainer: {
        alignItems: 'center',
        paddingVertical: 15,
        paddingBottom: 100
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
        margin:2,

    },
    imageInner: {
        borderRadius: 12,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 8,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
})
