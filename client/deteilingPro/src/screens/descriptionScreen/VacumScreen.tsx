import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface VacumScreenProps {

}

const VacumScreen: FC<VacumScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>VacumScreen</Text>
    </View>
  );
};

export default VacumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
