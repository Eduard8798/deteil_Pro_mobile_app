import React, {FC, useState} from 'react';
import {Button, ScrollView, View} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {RootTabParamList} from "../navigation/MyTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAppDispatch, useAppSelector} from "../store/storeHooks";
import {setThemeMode} from "../store/slices/themeSlice";

type ProfileScreenRouteProp = RouteProp<RootTabParamList, 'News'>;

interface AboutScreenProps{
    route:ProfileScreenRouteProp
}

const NewsScreen : FC<AboutScreenProps> = ({route}) => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector(
        state => state.theme.mode
    );
    const changeTheme = () => {
        dispatch(setThemeMode(!mode))
    }
    const deleteRef = async ()=>{
        await AsyncStorage.clear()
    }
    return (
<ScrollView>
    <View>
<Button title={'del ref'} onPress={deleteRef}/>
<Button title={'themeMode'} onPress={changeTheme}/>
    </View>
</ScrollView>
    );
};

export default NewsScreen;
