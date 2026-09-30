import {StyleSheet, Text, View} from "react-native";
import {RootStackParamList} from "../../navigation/RootStack";
import {FC} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type CreateOrderScreenNavigation = NativeStackNavigationProp<RootStackParamList, 'CreateOrderScreen'>;

interface ICreateOrderScreenProps{
    navigation:CreateOrderScreenNavigation;
}

const CreateOrderScreen:FC<ICreateOrderScreenProps> = ({navigation}) => {

    return (
        <View style={style.container}>
            <Text>Create OrdersScreen </Text>
            <Text style={style.buttonExit} onPress={()=>navigation.navigate('ProfileScreen')}>Exit</Text>
        </View>
    )
}
export default CreateOrderScreen;
const style = StyleSheet.create({
    container:{
        flex:1,

justifyContent:'center',
        alignItems:'center',
    },
    buttonExit:{
        margin:10,
        padding: 6,
        borderRadius: 8,
        borderColor:'#222',
        borderWidth: 1,



    }
})