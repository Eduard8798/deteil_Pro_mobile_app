import React, { FC } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStack';
import { Ionicons } from '@expo/vector-icons';
import { useAppSelector } from '../../store/storeHooks';

interface ArmoredScreenProps {}

type ArmoredFilmRouteProp = RouteProp<
    RootStackParamList,
    'ArmoredFilmScreen'
>;

const ArmoredScreen: FC<ArmoredScreenProps> = () => {
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
          Paint Protection Film
        </Text>

        <Text style={mode ? styles.subtitle : styles.subtitleBlack}>
          Invisible protection. Lasting perfection.
        </Text>

        <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode="cover"
        />

        <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
          Protection that speaks for itself.
        </Text>

        <Text style={mode ? styles.textDescription : styles.textDescriptionBlack}>
          Paint Protection Film (PPF) is a transparent polyurethane film that
          protects your vehicle’s paintwork while preserving its original
          appearance.
        </Text>

        <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
          Engineered to protect
        </Text>

        <Text style={mode ? styles.textDescription : styles.textDescriptionBlack}>
          The durable protective layer helps defend against scratches, stone
          chips, road debris, chemical contaminants and UV exposure.
        </Text>

        <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
          Beauty that lasts
        </Text>

        <Text style={mode ? styles.textDescription : styles.textDescriptionBlack}>
          High-quality films are designed to remain nearly invisible. Selected
          films also feature self-healing properties that help minor surface
          scratches disappear with heat.
        </Text>

        <Text style={mode ? styles.sectionTitle : styles.sectionTitleBlack}>
          Made for your vehicle
        </Text>

        <Text style={mode ? styles.textDescription : styles.textDescriptionBlack}>
          Protect specific areas such as the hood, bumpers, fenders, mirrors and
          door sills — or choose full-body coverage for comprehensive protection.
        </Text>

        <Text style={mode ? styles.footer : styles.footerBlack}>
          Preserve the finish. Protect the investment.
        </Text>
      </ScrollView>
  );
};

export default ArmoredScreen;

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