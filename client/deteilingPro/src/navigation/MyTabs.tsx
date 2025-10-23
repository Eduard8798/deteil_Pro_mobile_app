import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WashScreen from '../screens/WashScreen';
import NewsScreen from "../screens/NewsScreen";
import ProfileScreen from "../screens/ProfileScreen";

export type RootTabParamList = {
    Home: undefined;
    Wash: { userId: number };
    News: {name: "John"};
    Profile: { numberId : 5};

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
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Головна' }} />
            <Tab.Screen name="Wash" component={WashScreen} options={{ title: 'Мийки' }} />
            <Tab.Screen name="News" component={NewsScreen} options={{ title: 'Новини' }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профіль' }} />
        </Tab.Navigator>
    );
};

export default MyTabs;
