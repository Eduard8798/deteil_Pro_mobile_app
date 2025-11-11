import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LoginScreenProps {

}

const LoginScreen: FC<LoginScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
