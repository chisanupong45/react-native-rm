import React from 'react';
import {Button, Text, View, StyleSheet, Pressable} from 'react-native';
import {sizes, spacing} from '../constants/theme';

//  ปุ่มทั้งหมดอยู่ที่ไฟล์นี้
const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Button title={buttonTitle} />
      </View>
    );
  };
  

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing.l,
        marginTop: spacing.l,
        marginBottom: 10,
    },
    title: {
        fontSize: sizes.h3,
        fontWeight: 'bold',
    }
});


export default SectionHeader;