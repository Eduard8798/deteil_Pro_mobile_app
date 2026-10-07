import React, {FC} from 'react';
import {Button, ScrollView, Text, View} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {RootTabParamList} from "../navigation/MyTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import asyncStorage from "@react-native-async-storage/async-storage";

type ProfileScreenRouteProp = RouteProp<RootTabParamList, 'News'>;

interface AboutScreenProps{
    route:ProfileScreenRouteProp
}

const NewsScreen : FC<AboutScreenProps> = ({route}) => {

    const deleteRef = async ()=>{
        await AsyncStorage.clear()


    }
    return (
<ScrollView>
    <View>
<Button title={'del ref'} onPress={deleteRef}/>
    </View>
</ScrollView>
    );
};

export default NewsScreen;
