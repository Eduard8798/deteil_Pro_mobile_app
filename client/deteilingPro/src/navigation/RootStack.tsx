// navigation/RootStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './MyTabs';
import MapScreen from '../page/MapScreen';
import ArmoredScreen from "../screens/descriptionScreen/ArmoredScreen";
import VacuumScreen from "../screens/descriptionScreen/VacuumScreen";

export type RootStackParamList = {
    Tabs: undefined;
    MapScreen: undefined;
    ArmoredFilmScreen: {image : string};
    VacuumScreen: {image : string};
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={MyTabs} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="ArmoredFilmScreen" component={ArmoredScreen} />
            <Stack.Screen name="VacuumScreen" component={VacuumScreen} />
        </Stack.Navigator>
    );
};

export default RootStack;
