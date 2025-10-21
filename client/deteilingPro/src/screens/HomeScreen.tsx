import React, {FC} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {RootTabParamList} from "../navigation/MyTabs";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";


type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen : FC<HomeScreenProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text > Hello !</Text>
            <Button
                title="Перейти в профиль пользователя #42"
                onPress={() => navigation.navigate('Profile', { userId: 42 })} // ✅ Передаём параметр
            />
            <Button
                title="Показать информацио"
                onPress={() => navigation.navigate('About', {name: "John"})}
            />
            <Button title={'Перейти в настройки '}
                onPress={()=> navigation.navigate('Setting',{ numberId : 5})}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
