// navigation/RootStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './MyTabs';
import MapScreen from '../page/MapScreen';

export type RootStackParamList = {
    Tabs: undefined;
    MapScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={MyTabs} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
        </Stack.Navigator>
    );
};

export default RootStack;
