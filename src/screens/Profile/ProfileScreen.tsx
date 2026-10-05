import LoginScreen from "../Auth/LoginScreen";
import {AppNavigationProp} from "../../navigation/types/types";
import OrdersScreen from "../Orders/OrdersScreen";
import {useAppSelector} from "../../store/storeHooks";
import Loading from "../page/Loading";


interface IProfileScreenProps {
    navigation: AppNavigationProp;
}

const ProfileScreen = ({navigation}: IProfileScreenProps) => {

    const status = useAppSelector(
        state => state.auth.status
    );

    if (status === 'loading') {
        return (
            <Loading/>

        )

    }

    if (status === 'unauthenticated') {
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