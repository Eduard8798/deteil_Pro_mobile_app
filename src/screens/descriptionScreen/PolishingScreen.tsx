import React, { FC } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootStack";
import { Ionicons } from "@expo/vector-icons";

interface PolishingScreenProps {}

type ArmoredFilmRouteProp = RouteProp<RootStackParamList, 'DryCleaningScreen'>;

const PolishingScreen: FC<PolishingScreenProps> = () => {
  const navigation = useNavigation();
  const route = useRoute<ArmoredFilmRouteProp>();
  const { image } = route.params;

  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>

        <Text
            style={{
              fontSize: 18,
              color: '#949497',
              borderRadius: 16,
              borderWidth: 1,
              borderColor: '#222',
              padding: 12,
            }}
        >
          Car Body Polishing
        </Text>

        <Image style={styles.image} source={{ uri: image }} />

        <Text style={styles.textDescription}>
          {"\t"}Polishing is a process that restores the gloss and depth of your car’s paintwork. During polishing, minor scratches, scuffs, wash marks, and oxidation are removed from the surface.
          {"\n\t"} The result is a refreshed, mirror-like finish without reducing the paint thickness. This procedure not only enhances the car’s appearance but also prepares the surface for waxing or ceramic coating for long-lasting protection.
        </Text>
      </ScrollView>
  );
};

export default PolishingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
  },
  image: {
    width: 350,
    height: 250,
    margin: 50,
    borderRadius: 16,
  },
  textDescription: {
    color: '#ffffff',
    alignItems: 'center',
    maxWidth: 300,
  },
  contentContainer: {
    alignItems: 'center',
    padding: 100,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
});
