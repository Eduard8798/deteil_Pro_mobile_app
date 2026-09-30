import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "../../navigation/MyTabs";


type LoginScreenProp = BottomTabNavigationProp<RootTabParamList, 'Profile'>;

interface LoginScreenProps {
  navigation: LoginScreenProp;
}

const LoginScreen: FC<LoginScreenProps> = () => {


  return (
      <View style={styles.container}>
       <Text>Login</Text>
      </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f9f9f9',
  },

});
