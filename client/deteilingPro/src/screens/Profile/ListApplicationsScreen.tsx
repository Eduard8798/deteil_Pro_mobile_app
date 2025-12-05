import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Booking } from "./BookingScreen";

interface ListApplicationsScreenProps {}

const ListApplicationsScreen: FC<ListApplicationsScreenProps> = () => {
    const [applicationList, setApplicationList] = useState<Booking[]>([
        {
            serviceId: 'wash',
            serviceTitle: 'Washing',
            name: "Jack",
            phone: "380675463996",
            datetime: new Date("2025-01-10T10:00"),
            note: "Wash my car",
        },
        {
            serviceId: 'fix',
            serviceTitle: 'Repair',
            name: "Anna",
            phone: "380631112233",
            datetime: new Date("2025-01-12T15:30"),
            note: "Small scratch repair",
        },
        {
            serviceId: 'clean',
            serviceTitle: 'Cleaning',
            name: "John",
            phone: "380971234567",
            datetime: new Date("2025-01-15T09:00"),
        },
        {
            serviceId: 'polish',
            serviceTitle: 'Polishing',
            name: "Mike",
            phone: "380991111222",
            datetime: new Date("2025-01-18T13:45"),
            note: "Interior + exterior polish",
        }
    ]);

    return (
        <View style={styles.container}>
            {applicationList.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.title}>{item.serviceTitle}</Text>
                    <Text style={styles.text}>Name: {item.name}</Text>
                    <Text style={styles.text}>Phone: {item.phone}</Text>
                    <Text style={styles.text}>
                        Date: {item.datetime.toLocaleString()}
                    </Text>
                    {item.note && (
                        <Text style={styles.text}>Заметка: {item.note}</Text>
                    )}
                </View>
            ))}
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
    }
});
