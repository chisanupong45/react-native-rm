// change to InsectList

import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';
import FavoriteButton from './FavoriteButton';

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 220;

const TripsList = ({list}) => {
  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity style={styles.cardContainer}>
            <View style={[styles.card, shadow.light]} key={item.id}>
              <View style={styles.imageBox}>
                <Image style={styles.image} source={item.image} />
              </View>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <FavoriteButton />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardContainer: {
        marginLeft: spacing.l,
        marginBottom: spacing.l,
    },
    card: {
        widtH: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: colors.white,
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        borderTopLeftRadius: sizes.radius,
        borderTopRightRadius: sizes.radius,
        overflow: 'hidden',
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        resizeMode: 'cover',
    },

})

export default TripsList