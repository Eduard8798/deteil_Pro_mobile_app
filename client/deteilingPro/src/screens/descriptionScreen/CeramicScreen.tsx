import React, { FC } from 'react';
import {View, Text, StyleSheet, Pressable, Image, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../../navigation/RootStack";
import {Ionicons} from "@expo/vector-icons";

interface CeramicScreenProps {

}
type ArmoredFilmRouteProp = RouteProp<RootStackParamList, 'CeramicScreen'>;

const CeramicScreen: FC<CeramicScreenProps> = () => {
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
          borderWidth:1,borderColor:'#222',padding:12}}>Нанесення керамічного покриття</Text>
        <Image style={styles.image} source={{uri:image}}/>

        <Text style={styles.textDescription}>{"\t"}Керамічне покриття — це сучасний захист лакофарбового покриття автомобіля від зовнішніх впливів. Воно створює міцний прозорий шар, який додає глибокого блиску, підсилює колір і забезпечує ефект «антидощу».
          {"\n\t"}
          {"\n\t"}Після нанесення кераміки кузов набуває гладкої поверхні, на якій менше затримується бруд, пил і вода. Покриття захищає від ультрафіолету, реагентів, пташиного посліду та дрібних подряпин.
          {"\n\t"}Регулярний догляд за автомобілем стає простішим, а ефект глянцю зберігається протягом тривалого часу.
        </Text>
      </ScrollView>
  );
};

export default CeramicScreen;

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
