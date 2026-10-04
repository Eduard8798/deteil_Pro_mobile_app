import {RootStackParamList} from "../RootStack";
import {CompositeNavigationProp} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "../MyTabs";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type AppNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList>,
    NativeStackNavigationProp<RootStackParamList>
>;