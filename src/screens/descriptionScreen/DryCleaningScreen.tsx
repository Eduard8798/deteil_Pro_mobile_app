import React, { FC } from 'react';
import {
    Text,
    StyleSheet,
    Pressable,
    Image,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStack';
import { useAppSelector } from '../../store/storeHooks';

interface DryCleaningScreenProps {}

type ArmoredFilmRouteProp = RouteProp<
    RootStackParamList,
    'PolishingScreen'
>;

const DryCleaningScreen: FC<DryCleaningScreenProps> = () => {
    const navigation = useNavigation();
    const route = useRoute<ArmoredFilmRouteProp>();
    const { image } = route.params;
    const mode = useAppSelector(state => state.theme.mode);

    return (
        <ScrollView
            style={mode ? styles.safeArea : styles.safeAreaBlack}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <Pressable
                style={mode ? styles.backButton : styles.backButtonBlack}
                onPress={() => navigation.goBack()}
            >
                <Ionicons
                    name="chevron-back"
                    size={24}
                    color={mode ? '#1D1D1F' : '#F5F5F7'}
                />
            </Pressable>

            <Text style={mode ? styles.eyebrow : styles.eyebrowBlack}>
                CAR CARE
            </Text>

            <Text style={mode ? styles.title : styles.titleBlack}>
                Interior Dry Cleaning
            </Text>

            <Text style={mode ? styles.subtitle : styles.subtitleBlack}>
                Deep clean. Fresh feel. Every detail matters.
            </Text>

            <Image
                style={styles.image}
                source={{ uri: image }}
                resizeMode="cover"
            />

            <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
                A fresh start for your interior.
            </Text>

            <Text style={mode ? styles.textDescription : styles.textDescriptionBlack}>
                Professional interior dry cleaning removes accumulated dirt, dust,
                stains and grease from your vehicle’s interior. Specialized products
                and techniques are selected for different materials and surfaces.
            </Text>

            <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
                Every detail matters
            </Text>

            <Text style={mode ? styles.textDescription : styles.textDescriptionBlack}>
                The process can include seats, upholstery, carpets, floor mats,
                headliner, door panels and hard-to-reach areas, depending on the
                condition of the interior and the selected service.
            </Text>

            <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
                Comfort you can feel
            </Text>

            <Text style={mode ? styles.textDescription : styles.textDescriptionBlack}>
                Removing embedded dirt and residue helps restore a cleaner appearance
                and a more pleasant cabin environment. Odor treatment can also be
                included when needed.
            </Text>

            <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
                Care that lasts
            </Text>

            <Text style={mode ? styles.textDescription : styles.textDescriptionBlack}>
                Regular professional cleaning helps maintain interior materials,
                preserve their appearance and make everyday maintenance easier.
            </Text>

            <Text style={mode ? styles.footer : styles.footerBlack}>
                Step inside. Feel the difference.
            </Text>
        </ScrollView>
    );
};

export default DryCleaningScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5F7',
    },
    safeAreaBlack: {
        flex: 1,
        backgroundColor: '#000000',
    },
    contentContainer: {
        alignItems: 'center',
        paddingTop: '20%',
        paddingBottom: '12%',
        paddingHorizontal: '6%',
    },
    backButton: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        zIndex: 10,
        width: '12%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8ED',
        borderRadius: 100,
    },
    backButtonBlack: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        zIndex: 10,
        width: '12%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1C1C1E',
        borderRadius: 100,
    },
    eyebrow: {
        color: '#86868B',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 2,
        textAlign: 'center',
        marginBottom: '3%',
    },
    eyebrowBlack: {
        color: '#98989D',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 2,
        textAlign: 'center',
        marginBottom: '3%',
    },
    title: {
        width: '100%',
        color: '#1D1D1F',
        fontSize: 32,
        fontWeight: '700',
        letterSpacing: -1,
        textAlign: 'center',
        lineHeight: 38,
    },
    titleBlack: {
        width: '100%',
        color: '#F5F5F7',
        fontSize: 32,
        fontWeight: '700',
        letterSpacing: -1,
        textAlign: 'center',
        lineHeight: 38,
    },
    subtitle: {
        width: '90%',
        color: '#6E6E73',
        fontSize: 16,
        lineHeight: 23,
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '8%',
    },
    subtitleBlack: {
        width: '90%',
        color: '#A1A1A6',
        fontSize: 16,
        lineHeight: 23,
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '8%',
    },
    image: {
        width: '100%',
        aspectRatio: 1.2,
        borderRadius: 24,
        marginBottom: '10%',
    },
    sectionTitle: {
        width: '100%',
        color: '#1D1D1F',
        fontSize: 21,
        fontWeight: '600',
        letterSpacing: -0.4,
        textAlign: 'left',
        marginBottom: '3%',
        marginTop: '3%',
    },
    sectionTitleBlack: {
        width: '100%',
        color: '#F5F5F7',
        fontSize: 21,
        fontWeight: '600',
        letterSpacing: -0.4,
        textAlign: 'left',
        marginBottom: '3%',
        marginTop: '3%',
    },
    textDescription: {
        width: '100%',
        color: '#6E6E73',
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'left',
        marginBottom: '5%',
    },
    textDescriptionBlack: {
        width: '100%',
        color: '#A1A1A6',
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'left',
        marginBottom: '5%',
    },
    footer: {
        width: '100%',
        color: '#1D1D1F',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '8%',
    },
    footerBlack: {
        width: '100%',
        color: '#F5F5F7',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '8%',
    },
});