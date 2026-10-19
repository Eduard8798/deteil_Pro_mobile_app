import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Pressable, Alert,
} from "react-native";
import {useDeletedOrderMutation, useGetOrderByIdQuery} from "../../store/endpoints/orderApi";
import {RootStackParamList} from "../../navigation/RootStack";
import {RouteProp} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {AppNavigationProp} from "../../navigation/types/types";

interface IOrderDetailsIdProps {
    route: RouteProp<RootStackParamList, "OrderDetailsId">;
    navigation: AppNavigationProp;
}


const OrderDetailsId = ({ route,navigation }: IOrderDetailsIdProps) => {
    const { id } = route.params;
    const { data: order, isLoading, isError } = useGetOrderByIdQuery(id);
    const [deletedOrder] = useDeletedOrderMutation();

    if (isLoading) {
        return (
            <View style={styles.center}>
                <Text style={styles.secondaryText}>Загрузка заказа...</Text>
            </View>
        );
    }

    if (isError || !order) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>
                    Не удалось загрузить заказ
                </Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {/* Back button */}
            <Pressable
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>‹ Back</Text>
            </Pressable>

            <Text style={styles.screenTitle}>Order Details</Text>

            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Information</Text>

                <View style={styles.field}>
                    <Text style={styles.label}>Order ID</Text>
                    <Text style={styles.value}>{id}</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.field}>
                    <Text style={styles.label}>Customer Name</Text>
                    <Text style={styles.value}>
                        {order.user?.name ?? "Not provided"}
                    </Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.field}>
                    <Text style={styles.label}>Phone Number</Text>
                    <Text style={styles.value}>
                        {order.phone ?? "Not provided"}
                    </Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.field}>
                    <Text style={styles.label}>Order Description</Text>
                    <Text style={styles.message}>
                        {order.message || "No description available"}
                    </Text>
                </View>
            </View>

            {order.url_photo ? (
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Vehicle Photo</Text>

                    <Image
                        source={{ uri: order.url_photo }}
                        style={styles.photo}
                        resizeMode="cover"
                    />
                </View>
            ) : null}

            <Pressable
                style={styles.deleteButton}
                onPress={() => {
                    Alert.alert(
                        "Delete Order",
                        "Are you sure you want to delete this order?",
                        [
                            {
                                text: "Cancel",
                                style: "cancel",
                            },
                            {
                                text: "Delete",
                                style: "destructive",
                                onPress: () => {
                                    {deletedOrder(id),navigation.goBack()}
                                },
                            },
                        ]
                    );
                }}
            >
                <Ionicons
                    name="trash-outline"
                    size={20}
                    color="#FF3B30"
                />
                <Text style={styles.deleteButtonText}>Delete Order</Text>
            </Pressable>
        </ScrollView>
    );
};

export default OrderDetailsId;

const styles = StyleSheet.create({
    container: {
        marginTop: "10%",
        flex: 1,
        backgroundColor: "#F2F2F7",
        paddingHorizontal: "4%",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F7",
    },
    backButton: {
        alignSelf: "flex-start",
        paddingVertical: 8,
        paddingRight: 16,
        marginTop: 8,
        marginBottom: 8,
    },

    backButtonText: {
        fontSize: 17,
        fontWeight: "500",
        color: "#007AFF",
    },
    screenTitle: {
        fontSize: 28,
        fontWeight: "700",
        color: "#1C1C1E",
        marginTop: 20,
        marginBottom: 20,
    },
    card: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: "4%",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2,
    },
    deleteButton: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        paddingVertical: 16,
        marginBottom: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#FF3B30",
    },
    deleteButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FF3B30",
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: "600",
        color: "#1C1C1E",
        marginBottom: 16,
    },
    field: {
        paddingVertical: 10,
        gap: 6,
    },
    label: {
        fontSize: 13,
        color: "#8E8E93",
    },
    value: {
        fontSize: 16,
        fontWeight: "500",
        color: "#1C1C1E",
    },
    message: {
        fontSize: 16,
        lineHeight: 23,
        color: "#3A3A3C",
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#E5E5EA",
    },
    photo: {
        width: "100%",
        height: 220,
        borderRadius: 12,
        backgroundColor: "#E5E5EA",
    },
    secondaryText: {
        fontSize: 15,
        color: "#8E8E93",
    },
    errorText: {
        fontSize: 16,
        color: "#FF3B30",
    },
});