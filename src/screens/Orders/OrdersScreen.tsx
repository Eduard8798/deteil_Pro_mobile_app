import {StyleSheet, Text, View} from "react-native";
import {RootStackParamList} from "../../navigation/RootStack";
import {FC} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";


type OrdersScreenNavigation = NativeStackNavigationProp<RootStackParamList, 'CreateOrderScreen'>;

interface IOrdersScreenProps {
    navigation: OrdersScreenNavigation;
}


const OrdersScreen: FC<IOrdersScreenProps> = () => {

    return (
        <View style={style.container}>
            <Text style={style.content}>OrdersScreen </Text>
        </View>
    )
}
export default OrdersScreen;
const style = StyleSheet.create({
    container: {
        flex:1,

        justifyContent:'center',
        alignItems:'center'
    },
    content:{

    }
})