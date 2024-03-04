import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, sizes, spacing } from '../constants/theme';
import Icon from '../components/shared/Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TripDetailsCard from '../components/TripDetailsCard/TripDetailsCard';
import * as Animatable from 'react-native-animatable';
import TripDetailsCarousel from '../components/TripDetailsCarousel';


const TripDetailsScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { trip } = route.params;

  // Check if trip and trip.gallery are defined before accessing properties
  const slides = [trip?.image, ...(trip?.gallery || [])].filter(Boolean);

  return (
    <View style={styles.container}>
      <Animatable.View
        style={[styles.backButton, { marginTop: insets.top }]}
        animation="fadeIn"
        delay={500}
        duration={400}
        easing="ease-in-out">
        <Icon
          icon="ArrowLeft"
          style={styles.backIcon}
          onPress={navigation.goBack}
        />
      </Animatable.View>
      <TripDetailsCarousel slides={slides} id={trip.id} />
      <TripDetailsCard trip={trip} />
    </View>
  );
};

TripDetailsScreen.sharedElements = (route) => {
  const { trip } = route.params;
  return [
    {
      id: `trip.${trip.id}.image`,
    },
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    left: spacing.l,
    zIndex: 1,
  },
  backIcon: {
    tintColor: colors.white,
  },
});

export default TripDetailsScreen;
