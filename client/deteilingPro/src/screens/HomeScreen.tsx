import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootTabParamList} from "../navigation/MyTabs";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import MapScreenNavigation from "../page/MapScreenNavigation";
import MapScreen from "../page/MapScreen";


type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Бонуси </Text>
            <Text style={styles.text}> Рахунок: ГРН</Text>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
                    <MapScreenNavigation />
                </TouchableOpacity>

                {/*<MapScreenNavigation/>*/}
                {/*<MapScreen/>*/}
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
    text: {
        margin: 15,
        borderRadius: 35,
        padding: 5,
        borderWidth: 1,
        borderColor: 'gray',
        color: '#373636',
        backgroundColor: '#f4f3f3',

    },
    mapStyles:{
        borderRadius:35,
        borderWidth:1,
        borderColor:'#949497',
        color:'#949497',
        backgroundColor:'#949497'
    }

})
