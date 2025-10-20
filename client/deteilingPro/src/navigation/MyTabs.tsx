import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, // убрать верхний header
                tabBarActiveTintColor: '#163f7c',
                tabBarInactiveTintColor: '#888',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Главная' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
        </Tab.Navigator>
    );
};

export default MyTabs;
