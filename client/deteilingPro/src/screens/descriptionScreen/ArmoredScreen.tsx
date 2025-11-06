import React, {FC} from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../../navigation/RootStack";
import {Ionicons} from "@expo/vector-icons";

interface ArmoredScreenProps {

}
type ArmoredFilmRouteProp = RouteProp<RootStackParamList, 'ArmoredFilmScreen'>;
const ArmoredScreen: FC<ArmoredScreenProps> = () => {
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
        borderWidth:1,borderColor:'#222',padding:12}}>Поклейка бронеплівки на кузов автомобіля</Text>
      <Image style={styles.image} source={{uri:image}}/>

      <Text style={styles.textDescription}>{"\t"}Поклейка захисної бронеплівки — це сучасний спосіб зберегти ідеальний вигляд вашого автомобіля. Прозора поліуретанова або вінілова плівка наноситься на кузовні елементи, утворюючи міцний захисний шар, який оберігає лакофарбове покриття від подряпин, сколів, хімічних реагентів та ультрафіолету.

        Покриття майже непомітне, не змінює колір автомобіля й зберігає глибокий блиск фарби.{"\n"}  Плівка має властивість самовідновлення — дрібні подряпини зникають під дією тепла.

        Захисну плівку можна наносити як на окремі елементи (капот, крила, бампери, пороги, дзеркала), так і на весь автомобіль. {"\n"}Це надійний спосіб зберегти кузов у первісному стані та зменшити витрати на полірування або перекраску в майбутньому.
      </Text>
    </ScrollView>
  );
};

export default ArmoredScreen;

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
