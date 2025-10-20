import React, {FC} from 'react';
import {Text, View,StyleSheet} from 'react-native';

interface HomeScreen {

}

const HomeScreen : FC<HomeScreen> = () => {
    return (
        <View style={styles.container}>
            <Text > Hello !</Text>
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
