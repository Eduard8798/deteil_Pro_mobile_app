import React, { FC } from 'react';
import {View, Text, StyleSheet, Pressable, Image, ScrollView} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../../navigation/RootStack";

interface DryCleaningScreenProps {

}
type ArmoredFilmRouteProp = RouteProp<RootStackParamList, 'PolishingScreen'>;

const DryCleaningScreen: FC<DryCleaningScreenProps> = () => {
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
          borderWidth:1,borderColor:'#222',padding:12}}>Хімчистка салону автомобіля</Text>
        <Image style={styles.image} source={{uri:image}}/>

        <Text style={styles.textDescription}>{"\t"}Хімчистка — це глибоке очищення салону автомобіля спеціальними засобами, які ефективно видаляють плями, пил, жир, неприємні запахи та бактерії. Процедура охоплює сидіння, оббивку, підлогу, стелю, панелі й важкодоступні місця.
          {"\n"}  Після професійної хімчистки салон набуває свіжого вигляду, приємного аромату та відчуття чистоти. Якісне очищення не лише покращує комфорт, а й подовжує термін служби матеріалів інтер’єру.
        </Text>
      </ScrollView>
  );
};

export default DryCleaningScreen;

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
