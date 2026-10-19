import React, {FC} from 'react';
import {Animated, ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "../navigation/RootStack";
import ScrollView = Animated.ScrollView;
import {useAppSelector} from "../store/storeHooks";


type WashScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'ArmoredFilmScreen'>;

interface WashScreenProps {
    navigation: WashScreenNavigationProp;
}

const WashScreen: FC<WashScreenProps> = ({navigation}) => {

    const mode = useAppSelector(
        state => state.theme.mode
    );

    return (
        <ScrollView style={ styles.container }
                    contentContainerStyle={mode ? styles.contentContainer : styles.contentContainerBlack}
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
                        <Text style={styles.text}>Gluing armored film service</Text>
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
                        <Text style={styles.text}>Vacuuming service</Text>
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
                    <Text style={styles.text}>Window tinting service</Text>
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
                    <Text style={styles.text}>Ceramic coating service</Text>
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
                    <Text style={styles.text}>Dry cleaning service</Text>
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
                    <Text style={styles.text}>Polishing service</Text>
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
        paddingVertical: '1%',
        paddingBottom: '30%',


    },
    contentContainerBlack:{
        alignItems: 'center',
        paddingBottom: 100,
        backgroundColor:"#030303"
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
        margin: '1%',
    },
    imageInner: {
        borderRadius: 12,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: '3%',
        borderRadius: 12,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
})
