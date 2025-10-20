import React, {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";

interface ProfileScreenProps {

}

const ProfileScreen: FC<ProfileScreenProps> = () => {
    return (
        <View style={styles.container}>
            <Text>Profile screen</Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
