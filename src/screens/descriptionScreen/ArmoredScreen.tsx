import React, { FC } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootStack";
import { Ionicons } from "@expo/vector-icons";

interface ArmoredScreenProps {}

type ArmoredFilmRouteProp = RouteProp<RootStackParamList, 'ArmoredFilmScreen'>;

const ArmoredScreen: FC<ArmoredScreenProps> = () => {
  const navigation = useNavigation();
  const route = useRoute<ArmoredFilmRouteProp>();
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
          Paint Protection Film (PPF) Application
        </Text>

        <Image style={styles.image} source={{ uri: image }} />

        <Text style={styles.textDescription}>
          {"\t"}Applying a protective paint protection film (PPF) is a modern way
          to keep your car looking flawless. A transparent polyurethane or vinyl
          film is applied to the vehicle’s body panels, forming a durable
          protective layer that shields the paint from scratches, rock chips,
          chemical contaminants, and UV rays.{"\n\n"}
          The coating is nearly invisible — it doesn’t alter the car’s color and
          preserves the deep shine of the paint. The film has
          self-healing properties, meaning minor scratches disappear with heat or
          sunlight.{"\n\n"}
          You can protect individual parts — such as the hood, fenders, bumpers,
          side mirrors, and door sills — or cover the entire vehicle.{"\n"}It’s a
          reliable way to maintain your car’s original appearance and reduce
          future costs on polishing or repainting.
        </Text>
      </ScrollView>
  );
};

export default ArmoredScreen;

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
