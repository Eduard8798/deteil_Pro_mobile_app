import React, {FC} from 'react';
import {Text, View} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {RootTabParamList} from "../navigation/MyTabs";

type ProfileScreenRouteProp = RouteProp<RootTabParamList, 'News'>;

interface AboutScreenProps{
    route:ProfileScreenRouteProp
}

const NewsScreen : FC<AboutScreenProps> = ({route}) => {
    const nameUser = route.params?.name;
    return (
//change text for screen
        <View style={{flex:1,justifyContent:'center',
            alignItems: 'center'}}>
            <Text>User name : {nameUser} </Text>
        </View>
    );
};

export default NewsScreen;
