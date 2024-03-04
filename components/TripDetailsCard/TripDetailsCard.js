import React, { useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors, sizes, spacing } from "../../constants/theme";
import * as Animatable from "react-native-animatable";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CustomHandler from "./CustomHandler";
import CustomBackground from "./CustomBackground";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Icon from "../shared/Icon";
import Divider from "../shared/Divider";
import SectionHeader from "../shared/SectionHeader";
// from ep3

const AnimatedDivider = Animated.createAnimatedComponent(Divider);

const TripDetailsCard = ({ trip }) => {
  // ตัวแปร
  const animatedIndex = useSharedValue(0);
  const snapPoints = useMemo(() => ["30%", "80%"], []);

  const titleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.primary]
    ),
    marginBottom: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 10],
      Extrapolation.CLAMP
    ),
  }));

  const locationStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.lightGray]
    ),
    fontSize: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [sizes.title, sizes.body],
      Extrapolation.CLAMP
    ),
  }));

  const locationIonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [0, 1],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  return (
    <BottomSheet
      index={0}
      animatedIndex={animatedIndex}
      snapPoints={snapPoints}
      backdropComponent={CustomBackground}
      handleComponent={CustomHandler}
    >
      <Animatable.View
        style={styles.header}
        animation="fadeInUp"
        delay={500}
        easing={"ease-in-out"}
        duration={400}
      >
        <Animated.Text style={[styles.title, titleStyle]}>
          {trip.title}
        </Animated.Text>

        <View style={styles.location}>
          <Animated.Text style={[styles.locationText, locationStyle]}>
            {trip.location}
          </Animated.Text>
          <Animated.View style={locationIonStyle}>
            <Icon icon="Location" size={20} style={styles.locationIcon} />
          </Animated.View>
        </View>
      </Animatable.View>
      <Divider />
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SectionHeader
          title="Summary"
          containerStyle={styles.SectionHeader}
          titleStyle={styles.sectionTitle}
        />
      </BottomSheetScrollView>
    </BottomSheet>
  );
};


const styles = StyleSheet.create({
  // card, header, title and location  from ep 3
  /* card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
  }, */
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: "bold",
    color: colors.black,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    tintColor: colors.black,
  },
  sectionHeader: {
    marginTop: spacing.m,
  },
  sectionTitle: {
    color: colors.lightGray,
    fontWeight: "normal",
  },
});

export default TripDetailsCard;
