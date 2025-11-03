import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TonerScreenProps {

}

const TonerScreen: FC<TonerScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>TonerScreen</Text>
    </View>
  );
};

export default TonerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
