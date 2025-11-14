// navigation/RootStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './MyTabs';
import MapScreen from '../page/MapScreen';
import ArmoredScreen from "../screens/descriptionScreen/ArmoredScreen";
import VacuumScreen from "../screens/descriptionScreen/VacuumScreen";
import TonerScreen from "../screens/descriptionScreen/TonerScreen";
import CeramicScreen from "../screens/descriptionScreen/CeramicScreen";
import DryCleaningScreen from "../screens/descriptionScreen/DryCleaningScreen";
import PolishingScreen from "../screens/descriptionScreen/PolishingScreen";
import LoginScreen from "../screens/Profile/LoginScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import BookingScreen from "../screens/Profile/BookingScreen";

export type RootStackParamList = {
    Tabs: undefined;
    MapScreen: undefined;
    ArmoredFilmScreen: {image : string};
    VacuumScreen: {image : string};
    TonerScreen: {image : string};
    CeramicScreen: {image : string};
    DryCleaningScreen: {image : string};
    PolishingScreen: {image : string};
    LoginScreen: undefined;
    ProfileScreen: undefined;
    BookingScreen:undefined;

};

export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={MyTabs} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="ArmoredFilmScreen" component={ArmoredScreen} />
            <Stack.Screen name="VacuumScreen" component={VacuumScreen} />
            <Stack.Screen name="TonerScreen" component={TonerScreen} />
            <Stack.Screen name="CeramicScreen" component={CeramicScreen} />
            <Stack.Screen name="DryCleaningScreen" component={DryCleaningScreen} />
            <Stack.Screen name="PolishingScreen" component={PolishingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="BookingScreen" component={BookingScreen} />
        </Stack.Navigator>
    );
};

export default RootStack;
