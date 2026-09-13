import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RegistrationScreenProps {

}

const RegistrationScreen: FC<RegistrationScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>RegistrationScreen</Text>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
