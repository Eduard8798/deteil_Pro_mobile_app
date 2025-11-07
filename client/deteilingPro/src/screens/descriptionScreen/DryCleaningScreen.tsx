import React, { FC } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootStack";

interface DryCleaningScreenProps {}

type ArmoredFilmRouteProp = RouteProp<RootStackParamList, 'PolishingScreen'>;

const DryCleaningScreen: FC<DryCleaningScreenProps> = () => {
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
          Car Interior Dry Cleaning
        </Text>

        <Image style={styles.image} source={{ uri: image }} />

        <Text style={styles.textDescription}>
          {"\t"}Dry cleaning is a deep interior cleaning process that uses professional products to effectively remove stains, dust, grease, unpleasant odors, and bacteria. The procedure includes seats, upholstery, carpets, headliner, panels, and hard-to-reach areas.
          {"\n"}  After a professional dry cleaning, the interior regains a fresh look, pleasant aroma, and a feeling of cleanliness. High-quality cleaning not only improves comfort but also extends the life of your car’s interior materials.
        </Text>
      </ScrollView>
  );
};

export default DryCleaningScreen;

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
