import React, { FC } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootStack";
import { Ionicons } from "@expo/vector-icons";

interface VacuumScreenProps {}

type ArmoredFilmRouteProp = RouteProp<RootStackParamList, 'ArmoredFilmScreen'>;

const VacuumScreen: FC<VacuumScreenProps> = () => {
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
          Vacuum Cleaning Service
        </Text>

        <Image style={styles.image} source={{ uri: image }} />

        <Text style={styles.textDescription}>
          {"\t"}Interior vacuuming is a basic yet essential part of car care.
          It helps remove dust, sand, crumbs, pet hair, and other debris from the
          floor, seats, mats, and hard-to-reach areas.{"\n\n"}
          Regular vacuum cleaning not only keeps the cabin clean and tidy but also
          helps prevent premature wear of the upholstery and the appearance of
          unpleasant odors.{"\n\n"}
          After a thorough vacuum cleaning, the interior looks neat and fresh,
          making every ride more pleasant and comfortable.
        </Text>
      </ScrollView>
  );
};

export default VacuumScreen;

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
