import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DryCliningScreenProps {

}

const DryCliningScreen: FC<DryCliningScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>DryCliningScreen</Text>
    </View>
  );
};

export default DryCliningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
