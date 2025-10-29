import React, {FC} from 'react';
import {Animated, Image, StyleSheet, Text, View} from "react-native";
import {RootTabParamList} from "../navigation/MyTabs";
import {RouteProp} from "@react-navigation/native";
import ScrollView = Animated.ScrollView;


type ProfileScreenRouteProp = RouteProp<RootTabParamList, 'Wash'>;

interface ProfileScreenProps {
    route: ProfileScreenRouteProp;
}

const WashScreen: FC<ProfileScreenProps> = ({route}) => {
    const userId = route.params?.userId ?? 2;
    return (
        <ScrollView style={styles.container}
                    contentContainerStyle={styles.contentContainer}
        >
            <Image
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/wash_taz3nt.jpg',
                }}
                style={styles.image}
                resizeMode="cover"
            />

            <Image
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/interior_vacuum_cleaner_sw1dlv.jpg',
                }}
                style={styles.image}
                resizeMode="cover"
            />
            <Image
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765527/toner_zgimzk.jpg',
                }}
                style={styles.image}
                resizeMode="cover"
            />
            <Image
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/keramic_pynt1o.jpg',
                }}
                style={styles.image}
                resizeMode="cover"
            />
            <Image
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/gluing_armored_film_lu6tgt.webp',
                }}
                style={styles.image}
                resizeMode="cover"
            />
            <Image
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/dry_cleaning_uiigbp.webp',
                }}
                style={styles.image}
                resizeMode="cover"
            />
            <Image
                source={{
                    uri: 'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/1qb33ngtv1t58jfyp2uy6mjn071y7q7c_bbtaiw.jpg',
                }}
                style={styles.image}
                resizeMode="cover"
            />
        </ScrollView>
    );
};

export default WashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    contentContainer: {
        alignItems: 'center',  // теперь тут!
        paddingVertical: 15,
    },
    image: {
        width: 300,
        height: 130,
        borderRadius: 12,
        margin:5,

    }
})
