import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {AppNavigationProp} from "../../navigation/types/types";
import {useGetOrderQuery} from "../../store/endpoints/orderApi";
import {useAppDispatch, useAppSelector} from "../../store/storeHooks";
import {logout} from "../../store/slices/authSlice";
import asyncStorage from "@react-native-async-storage/async-storage";


interface IOrdersScreenProps {
    navigation: AppNavigationProp;
}


const OrdersScreen = ({navigation}: IOrdersScreenProps) => {
    const {
        data: orders = [],
        isLoading,
        isFetching,
        isError,
    } = useGetOrderQuery();
    const dispatch = useAppDispatch();

    const mode = useAppSelector(
        state => state.theme.mode
    );

    if (isLoading) {
        return <View>
            <Text>isLoading</Text>
        </View>
    }
    if (isError) {
        return <View>Error</View>
    }
    const logoutProfile = () => {
        dispatch(logout());
        asyncStorage.removeItem('accessToken')
        asyncStorage.removeItem('refreshToken')
    }
    return (
        <View style={mode ? styles.container : styles.containerBlack}>

            <View style={styles.containerViewButton}>

                <Pressable style={styles.backButton} onPress={() =>
                    navigation.navigate("Wash")
                }>
                    <Text style={styles.textButtonExit} >‹️ Back</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.textButtonExit} onPress={() => {
                        navigation.navigate('Profile'),
                            logoutProfile()
                    }
                    }>Exit</Text>
                </Pressable>

            </View>
            <ScrollView style={styles.containerCardTop}>
                {isFetching && <Text>loading orders...</Text>}

                {orders?.map((item, index) => (
                    <Pressable key={index} style={mode ? styles.card: styles.cardBlack}
                               onPress={() => navigation.navigate('OrderDetailsId', {id: item.id})}>
                        <Text style={mode ? styles.title : styles.titleBlack}>{item.message}</Text>

                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={mode ? styles.text : styles.textBlack}>Name: {item.user.name}</Text>
                                <Text style={mode ? styles.text : styles.textBlack}>Phone: {item.phone}</Text>
                            </View>
                            <View>
                                <Image style={styles.imgOrder} source={{uri: item.url_photo}}/>
                            </View>
                        </View>

                    </Pressable>
                ))}

            </ScrollView>
            <View style={styles.createButtonView}>
                <Pressable onPress={() =>
                    navigation.navigate('CreateOrderScreen')
                }>
                    <Text style={mode ? styles.buttonCreateText : styles.buttonCreateTextBlack} >Create order</Text>
                </Pressable>


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
    containerBlack: {

        padding: 20,
        backgroundColor: '#030304',
    },
    containerCardTop: {
        marginTop: '5%',
        height: '70%'
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
    cardBlack: {

        width: '100%',
        padding: 15,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        backgroundColor: '#202025',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 1,
    },
    titleBlack: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 1,
    },
    text: {
        fontSize: 14,
        color: '#000',
        marginBottom: 1,
    },
    textBlack: {
        fontSize: 14,
        color: '#ffffff',
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
        color: "#007AFF",
        fontSize: 17,
        fontWeight: "500",
        padding: "2%",
        marginTop: '10%',

    },
    backButton: {
        alignSelf: "flex-start",
        paddingVertical: 8,
        paddingRight: 16,
        marginTop: 8,
        marginBottom: 8,
    },
    createButtonView:{
       bottom:"2%",
        alignItems:'center',
        // backgroundColor:"#007AFF",

    },
    buttonCreateText:{
        color: "#ffffff",
        fontSize: 17,
        fontWeight: "500",
        paddingTop: "3%",
        paddingBottom: "3%",
        paddingHorizontal:'25%',
        marginTop: '10%',
        backgroundColor:"#007AFF",
        borderRadius:12,
        top:'1%',

    },
    buttonCreateTextBlack:{
        color: "#ffffff",
        fontSize: 17,
        fontWeight: "500",
        paddingTop: "3%",
        paddingBottom: "3%",
        paddingHorizontal:'25%',
        marginTop: '10%',
        backgroundColor:"#003095",
        borderRadius:12,
        top:'1%',

    },

    containerViewButton: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1%',
        top:'4%'

    }
});
