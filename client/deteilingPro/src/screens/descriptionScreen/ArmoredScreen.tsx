import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ArmoredScreenProps {
    
}

const ArmoredScreen: FC<ArmoredScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>ArmoredScreen</Text>
    </View>
  );
};

export default ArmoredScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
