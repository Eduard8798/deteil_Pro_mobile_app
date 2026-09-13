import React, { FC } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootStack";
import { Ionicons } from "@expo/vector-icons";

interface CeramicScreenProps {}

type CeramicRouteProp = RouteProp<RootStackParamList, 'CeramicScreen'>;

const CeramicScreen: FC<CeramicScreenProps> = () => {
  const navigation = useNavigation();
  const route = useRoute<CeramicRouteProp>();
  const { image } = route.params;

  return (
      <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
      >
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
          Ceramic Coating Application
        </Text>

        <Image style={styles.image} source={{ uri: image }} />

        <Text style={styles.textDescription}>
          {"\t"}Ceramic coating is a modern solution for protecting your car’s
          paintwork from external damage. It creates a strong, transparent layer
          that enhances color depth, provides a brilliant gloss, and delivers a
          long-lasting water-repellent (“anti-rain”) effect.{"\n\n"}
          After the coating is applied, the surface becomes smooth and slick,
          preventing dirt, dust, and water from sticking. The ceramic layer also
          protects against UV rays, road chemicals, bird droppings, and minor
          scratches.{"\n\n"}
          Routine cleaning becomes much easier, and the glossy finish remains for
          an extended period of time — keeping your vehicle looking freshly
          detailed for years.
        </Text>
      </ScrollView>
  );
};

export default CeramicScreen;

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
