import React, {FC} from 'react';
import {Animated, Image, StyleSheet} from "react-native";
import {RootTabParamList} from "../navigation/MyTabs";
import {RouteProp} from "@react-navigation/native";

type ProfileScreenRouteProp = RouteProp<RootTabParamList, 'Wash'>;

interface ProfileScreenProps {
    route: ProfileScreenRouteProp;
}

const WashScreen: FC<ProfileScreenProps> = ({route}) => {


    return (
        <Animated.ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            {[
                'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/wash_taz3nt.jpg',
                'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/interior_vacuum_cleaner_sw1dlv.jpg',
                'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765527/toner_zgimzk.jpg',
                'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/keramic_pynt1o.jpg',
                'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/gluing_armored_film_lu6tgt.webp',
                'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/dry_cleaning_uiigbp.webp',
                'https://res.cloudinary.com/druvfoz4x/image/upload/v1761765526/1qb33ngtv1t58jfyp2uy6mjn071y7q7c_bbtaiw.jpg',
            ].map((uri, i) => (
                <Image
                    key={i}
                    source={{ uri }}
                    style={styles.image}
                    resizeMode="cover"
                />
            ))}
        </Animated.ScrollView>
    );
};

export default WashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        alignItems: 'center',
        paddingVertical: 15,
    },
    image: {
        width: 300,
        height: 130,
        borderRadius: 12,
        marginVertical: 10,
    },
});
