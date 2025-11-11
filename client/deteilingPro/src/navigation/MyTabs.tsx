import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WashScreen from '../screens/WashScreen';
import NewsScreen from "../screens/NewsScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import {Ionicons} from '@expo/vector-icons';
import {BlurView} from 'expo-blur';
import {StyleSheet} from 'react-native';

export type RootTabParamList = {
    Home: undefined;
    Wash: { userId: number };
    News: { name: "John" };
    Profile: undefined;
    MapScreen: undefined;

};

const Tab = createBottomTabNavigator<RootTabParamList>();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarStyle: {
                    position: 'absolute',
                    height: 100,
                    elevation: 5, // Android
                },
                tabBarBackground: () => (
                    <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill}/>
                ),
                //icon
                tabBarIcon: ({color, size, focused}) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Wash') {
                        iconName = focused ? 'water' : 'water-outline';
                    } else if (route.name === 'News') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={26} color={color}/>;

                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
            <Tab.Screen name="Wash" component={WashScreen} options={{title: 'Wash'}}/>
            <Tab.Screen name="News" component={NewsScreen} options={{title: 'News'}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile'}}/>
        </Tab.Navigator>
    );
};

export default MyTabs;
