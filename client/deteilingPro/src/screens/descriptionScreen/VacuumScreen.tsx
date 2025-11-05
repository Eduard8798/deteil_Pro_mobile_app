import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface VacuumScreenProps {

}

const VacuumScreen: FC<VacuumScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>VacuumScreen</Text>
    </View>
  );
};

export default VacuumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
