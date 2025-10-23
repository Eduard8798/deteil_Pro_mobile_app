import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {RootTabParamList} from "../navigation/MyTabs";
import {RouteProp} from "@react-navigation/native";


type ProfileScreenRouteProp = RouteProp<RootTabParamList, 'Wash'>;

interface ProfileScreenProps {
    route: ProfileScreenRouteProp;
}

const WashScreen: FC<ProfileScreenProps> = ({route}) => {
    const userId = route.params?.userId ?? 2;
    return (
        <View style={styles.container}>
            <Text>Профиль пользователя ID: {userId !== undefined ? userId: 2}</Text>
        </View>
    );
};

export default WashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
