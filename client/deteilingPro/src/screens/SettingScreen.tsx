import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {RouteProp} from "@react-navigation/native";
import {RootTabParamList} from "../navigation/MyTabs";

type ProfileScreenRouteProp = RouteProp<RootTabParamList, 'Setting'>;

interface SettingScreenProps {
    route : ProfileScreenRouteProp
}

const SettingScreen: FC<SettingScreenProps> = ({route}) => {
    const number = route.params?.numberId || 0;
  return (
    <View style={styles.container}>
      <Text>{number}</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
