import React, {FC} from 'react';
import {Animated, ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "../navigation/RootStack";
import ScrollView = Animated.ScrollView;


type WashScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'ArmoredFilmScreen'>;

interface WashScreenProps {
    navigation: WashScreenNavigationProp;
}

const WashScreen: FC<WashScreenProps> = ({navigation}) => {


    return (
        <ScrollView style={styles.container}
                    contentContainerStyle={styles.contentContainer}
        >
            <Pressable style={styles.image} onPress={() => navigation.navigate('ArmoredFilmScreen',
                {
                    image: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/gluing_armored_film_lu6tgt.webp'
                }
            )}>
                <ImageBackground
                    source={{
                        uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/gluing_armored_film_lu6tgt.webp',
                    }}
                    style={styles.image}
                    imageStyle={styles.imageInner}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.text}>Поклейка бронеплёнки</Text>
                    </View>
                </ImageBackground>
            </Pressable>


            <Pressable style={styles.image} onPress={() => navigation.navigate('VacuumScreen',
                {
                    image: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/interior_vacuum_cleaner_sw1dlv.jpg'
                }
            )}>
                <ImageBackground
                    source={{
                        uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/interior_vacuum_cleaner_sw1dlv.jpg',
                    }}
                    style={styles.image}
                    imageStyle={styles.imageInner}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.text}>Послуга пилососа</Text>
                    </View>
                </ImageBackground>
            </Pressable>


            <Pressable style={styles.image} onPress={() => navigation.navigate('TonerScreen',
                {
                    image: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765527/toner_zgimzk.jpg'
                }
            )}>
            <ImageBackground
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765527/toner_zgimzk.jpg',
                }}
                style={styles.image}
                imageStyle={styles.imageInner}
            >
                <View style={styles.overlay}>
                    <Text style={styles.text}>Тонування</Text>
                </View>
            </ImageBackground>
            </Pressable>


            <Pressable style={styles.image} onPress={() => navigation.navigate('CeramicScreen',
                {
                    image: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/keramic_pynt1o.jpg'
                }
            )}>
            <ImageBackground
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/keramic_pynt1o.jpg',
                }}
                style={styles.image}
                imageStyle={styles.imageInner}
            >
                <View style={styles.overlay}>
                    <Text style={styles.text}>Кераміка</Text>
                </View>
            </ImageBackground>
            </Pressable>

            <Pressable style={styles.image} onPress={() => navigation.navigate('DryCleaningScreen',
                {
                    image: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/dry_cleaning_uiigbp.webp'
                }
            )}>
            <ImageBackground
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/dry_cleaning_uiigbp.webp',
                }}
                style={styles.image}
                imageStyle={styles.imageInner}
            >
                <View style={styles.overlay}>
                    <Text style={styles.text}>Хімчистка</Text>
                </View>
            </ImageBackground>
            </Pressable>


            <Pressable style={styles.image} onPress={() => navigation.navigate('PolishingScreen',
                {
                    image: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/1qb33ngtv1t58jfyp2uy6mjn071y7q7c_bbtaiw.jpg'
                }
            )}>
            <ImageBackground
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/1qb33ngtv1t58jfyp2uy6mjn071y7q7c_bbtaiw.jpg',
                }}
                style={styles.image}
                imageStyle={styles.imageInner}
            >
                <View style={styles.overlay}>
                    <Text style={styles.text}>Полірування</Text>
                </View>
            </ImageBackground>
            </Pressable>


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
        paddingBottom: 100,
        backgroundColor:"#030303"
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
        margin: 2,

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
