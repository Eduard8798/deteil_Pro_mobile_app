import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootTabParamList} from "../navigation/MyTabs";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import MapScreenNavigation from "../maps/MapScreenNavigation";
import {useAppSelector} from "../store/storeHooks";


type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({navigation}:HomeScreenProps) => {


    const mode = useAppSelector(
        state => state.theme.mode
    );

    return (
        <View style={mode ? styles.container : styles.containerDark}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
                    <MapScreenNavigation />
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerDark: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#030304'
    },
    mapStyles:{
        borderRadius:35,
        borderWidth:1,
        borderColor:'#949497',
        color:'#949497',
        backgroundColor:'#949497'
    }

})