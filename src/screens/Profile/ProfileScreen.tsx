import LoginScreen from "../Auth/LoginScreen";
import {AppNavigationProp} from "../../navigation/types/types";
import OrdersScreen from "../Orders/OrdersScreen";
import {useAppSelector} from "../../store/hooks/storeHook";


interface IProfileScreenProps {
    navigation: AppNavigationProp;
}

const ProfileScreen = ({navigation}: IProfileScreenProps) => {

    const isAuthenticated = useAppSelector(
        state => state.auth.isAuthenticated
    );


    if (!isAuthenticated) {
        return (
            <LoginScreen
                navigation={navigation}
            />
        );
    }

    return (
        <OrdersScreen navigation={navigation}/>
    );


};

export default ProfileScreen;