import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MapScreenNavigationProps {
    
}

const MapScreenNavigation: FC<MapScreenNavigationProps> = () => {
  return (
    <View style={styles.container}>
      <Text>MapScreenNavigation</Text>
    </View>
  );
};

export default MapScreenNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
