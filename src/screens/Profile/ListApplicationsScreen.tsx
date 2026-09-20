import React, {FC, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Booking} from "./BookingScreen";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "../../navigation/RootStack";
import {useGetOrderQuery} from "../../store/endpoints/orderApi";
import {OrderList} from "../../store/type/type";


type ListApplicationsScreenProps = BottomTabNavigationProp<RootStackParamList, 'ListApplicationsScreen'>;

interface IListApplicationsScreenProps {
    navigation: ListApplicationsScreenProps;
}

const ListApplicationsScreen: FC<IListApplicationsScreenProps> = ({navigation}) => {
    const {data,isLoading,isError} = useGetOrderQuery();

    const [listOrders,setListOrders] = useState<OrderList[]>( data ?? []);
   if (isLoading){
       return <View>isLoading</View>
   }
   if (isError){
       return <View>Error</View>
   }
   console.log('listOrders',data)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerCardTop}>

            {data?.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.title}>{item.message}</Text>

                    <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                        <Text style={styles.text}>Name: {item.user.name}</Text>
                        <Text style={styles.text}>Phone: {item.phone}</Text>
                        </View>
                        <View>
                        <Image style={styles.imgOrder} source={{ uri: item.url_photo }}/>
                        </View>
                    </View>

                </View>
            ))}
            <View style={styles.containerViewButton}>
            <Text style={styles.textButtonExit} onPress={()=>
                navigation.navigate('ProfileScreen')
            }>Exit</Text>
            </View>
            </ScrollView>
        </View>
    );
};

export default ListApplicationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',     // белый фон
    },
    containerCardTop:{
        marginTop:'20%'
    },
    card: {
        width: '100%',
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,              // чёрная рамка
        borderColor: '#000',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',               // чёрный текст
        marginBottom: 5,
    },
    text: {
        fontSize: 14,
        color: '#000',
        marginBottom: 2,
    },
    imgOrder:{
        width: 50,
        height: 50,
        borderRadius: 8,
        bottom:10
    },
    textButtonExit:{
        position: 'relative',
        backgroundColor:'#030304',
        color:'#ffffff',
        padding: '4%',
        borderWidth: 1,
        borderRadius: 8,
        marginTop:'10%'
    },

    containerViewButton:{
        display:"flex",
        alignItems:'center'
    }
});
