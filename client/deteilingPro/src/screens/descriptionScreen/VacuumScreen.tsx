import React, { FC } from 'react';
import {View, Text, StyleSheet, Pressable, Image, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../../navigation/RootStack";
import {Ionicons} from "@expo/vector-icons";

interface VacuumScreenProps {

}
type ArmoredFilmRouteProp = RouteProp<RootStackParamList, 'ArmoredFilmScreen'>;


const VacuumScreen: FC<VacuumScreenProps> = () => {
  const navigation = useNavigation();

  const route = useRoute<ArmoredFilmRouteProp>();
  const { image } = route.params
  return (
      <ScrollView style={styles.container}
                  contentContainerStyle={styles.contentContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </Pressable>
        <Text style={{fontSize:18,color:'#949497',borderRadius:16,
          borderWidth:1,borderColor:'#222',padding:12}}>Послуга пилососа</Text>
        <Image style={styles.image} source={{uri:image}}/>

        <Text style={styles.textDescription}>
          {"\t"}Вакуумне прибирання салону — це базова, але надзвичайно важлива процедура догляду за автомобілем. Пилосос допомагає видалити пил, пісок, крихти, шерсть тварин та інші забруднення з підлоги, сидінь, килимків і важкодоступних місць.

          {"\n\t"}Регулярне пилососіння не лише підтримує чистоту й охайний вигляд салону, а й запобігає передчасному зношенню оббивки та появі неприємних запахів.

          {"\n\t"} Після якісного очищення салон виглядає доглянутим, а перебування в автомобілі стає приємнішим і комфортнішим.
        </Text>
      </ScrollView>
  );
};

export default VacuumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:'#030303'
  },
  image: {
    width:350,
    height:250,
    margin:50,
    borderRadius:16
  },
  textDescription: {
    color:'#ffffff',
    alignItems:'center',
    maxWidth: 300
  },
  contentContainer:{
    alignItems: 'center',
    padding:100
  }, backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
  },
});
