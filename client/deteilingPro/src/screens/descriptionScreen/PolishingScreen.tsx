import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PolishingScreenProps {

}

const PolishingScreen: FC<PolishingScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>PolishingScreen</Text>
    </View>
  );
};

export default PolishingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
