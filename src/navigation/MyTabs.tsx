import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WashScreen from '../screens/WashScreen';
import Setting from "../screens/Setting";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import {Ionicons} from '@expo/vector-icons';
import {BlurView} from 'expo-blur';
import {StyleSheet} from 'react-native';
import {setAuthenticated, setUnauthenticated} from "../store/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAppDispatch, useAppSelector} from "../store/storeHooks";

export type RootTabParamList = {
    Home: undefined;
    Wash: undefined;
    Setting: undefined;
    Profile: undefined;
    MapScreen: undefined;
    BookingScreen:undefined;
    RegistrationScreen:undefined;


};

const Tab = createBottomTabNavigator<RootTabParamList>();

const MyTabs = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector(state => state.theme.mode);

    useEffect(() => {

        const checkAuth = async () => {

            const accessToken =
                await AsyncStorage.getItem('accessToken');

            const refreshToken =
                await AsyncStorage.getItem('refreshToken');

            if (accessToken && refreshToken) {
                dispatch(setAuthenticated());
            } else {
                dispatch(setUnauthenticated());
            }
        };

        checkAuth();

    }, [dispatch]);
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerStyle: {
                    backgroundColor: mode ? '#FFFFFF' : '#030304',
                },
                headerTintColor: mode ? '#000000' : '#FFFFFF',
                headerTitleStyle: {
                    color: mode ? '#000000' : '#FFFFFF',
                },
                headerShown: false,
                headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: 100,
                    elevation: 5, // Android
                    // backgroundColor: mode ? '#FFFFFF' : '#030304',
                    // borderTopColor: mode ? '#E5E5E5' : '#030304',
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
                    } else if (route.name === 'Setting') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={26} color={color}/>;

                }
            })}
        >
            <Tab.Screen  name="Home" component={HomeScreen} options={{title: 'Home'}}/>
            <Tab.Screen name="Wash" component={WashScreen} options={{title: 'Wash'}}/>
            <Tab.Screen name="Setting" component={Setting} options={{title: 'Setting'}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile'}}/>
        </Tab.Navigator>
    );
};

export default MyTabs;
