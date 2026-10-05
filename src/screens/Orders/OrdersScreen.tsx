import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import React, { useState} from "react";
import {AppNavigationProp} from "../../navigation/types/types";
import {useGetOrderQuery} from "../../store/endpoints/orderApi";
import {OrderList} from "../../store/type/type";


interface IOrdersScreenProps {
    navigation: AppNavigationProp;
}


const OrdersScreen = ({navigation}: IOrdersScreenProps) => {
    const {data, isLoading, isError} = useGetOrderQuery();

    const [listOrders, setListOrders] = useState<OrderList[]>(data ?? []);
    if (isLoading) {
        return <View>
            <Text>isLoading</Text>
        </View>
    }
    if (isError) {
        return <View>Error</View>
    }
    console.log('listOrders', data)
    return (
        <View style={styles.container}>
            <View style={styles.containerViewButton}>

                <Text style={styles.textButtonExit} onPress={() =>
                    navigation.navigate("Wash")
                }>⬅️ Back</Text>

                <Text style={styles.textButtonExit} onPress={() =>
                    navigation.navigate('Profile')
                }>Exit 🚪</Text>
            </View>
            <ScrollView style={styles.containerCardTop}>

                {data?.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.title}>{item.message}</Text>

                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={styles.text}>Name: {item.user.name}</Text>
                                <Text style={styles.text}>Phone: {item.phone}</Text>
                            </View>
                            <View>
                                <Image style={styles.imgOrder} source={{uri: item.url_photo}}/>
                            </View>
                        </View>

                    </View>
                ))}

            </ScrollView>
            <View style={styles.containerViewButton}>

                <Text style={styles.textButtonExit} onPress={() =>
                    navigation.navigate('CreateOrderScreen')
                } >Create order</Text>
            </View>

        </View>
    )
}
export default OrdersScreen;
const styles = StyleSheet.create({
    container: {

        padding: 20,
        backgroundColor: '#fff',
    },
    containerCardTop: {
        marginTop:'5%',
       height:'70%'
    },
    card: {

        width: '100%',
        padding: 15,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 1,
    },
    text: {
        fontSize: 14,
        color: '#000',
        marginBottom: 1,
    },
    imgOrder: {
        width: 50,
        height: 50,
        borderRadius: 8,
        bottom: 10
    },
    textButtonExit: {
        position: 'relative',
        backgroundColor: '#f3f3f3',
        color: '#030304',

        padding: '4%',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: '1%',
    },

    containerViewButton: {
        display: "flex",
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop:'1%'

    }
});
