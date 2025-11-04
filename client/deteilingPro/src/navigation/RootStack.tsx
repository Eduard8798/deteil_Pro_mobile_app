// navigation/RootStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './MyTabs';
import MapScreen from '../page/MapScreen';
import ArmoredScreen from "../screens/descriptionScreen/ArmoredScreen";

export type RootStackParamList = {
    Tabs: undefined;
    MapScreen: undefined;
    ArmoredFilm: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={MyTabs} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="ArmoredFilm" component={ArmoredScreen} />
        </Stack.Navigator>
    );
};

export default RootStack;
