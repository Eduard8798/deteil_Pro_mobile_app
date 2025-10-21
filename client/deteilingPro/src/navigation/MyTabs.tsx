import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from "../screens/AboutScreen";
import SettingScreen from "../screens/SettingScreen";

export type RootTabParamList = {
    Home: undefined;
    Profile: { userId: number };
    About: {name: "John"};
    Setting: { numberId : 5};

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
            <Tab.Screen name="About" component={AboutScreen} options={{ title: 'О нас' }} />
            <Tab.Screen name="Setting" component={SettingScreen} options={{ title: 'Настройки' }} />
        </Tab.Navigator>
    );
};

export default MyTabs;
