import React, {FC} from 'react';
import {ScrollView, Text, View} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {RootTabParamList} from "../navigation/MyTabs";

type ProfileScreenRouteProp = RouteProp<RootTabParamList, 'News'>;

interface AboutScreenProps{
    route:ProfileScreenRouteProp
}

const NewsScreen : FC<AboutScreenProps> = ({route}) => {

    return (
<ScrollView>
    <View>

    </View>
</ScrollView>
    );
};

export default NewsScreen;
