
import React, {FC, useEffect, useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface LoadingProps {
  text?: string;
}

const Loading: FC<LoadingProps> = ({text = 'Загрузка...'}) => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => animation.stop();
  }, [opacity]);

  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size="large"
          color="#FFD600"
        />

        <Animated.Text style={[styles.text, {opacity}]}>
          {text}
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#1C1C1C',
    borderWidth: 1,
    borderColor: '#333333',
    minWidth: 170,
  },

  text: {
    marginTop: 14,
    color: '#BDBDBD',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});

export default Loading;
