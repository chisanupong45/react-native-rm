import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import icons from '../constants/icons';

const Icon = ({onPress,icon, style, size = 32}) => {
    const image = (
        <Image
            source={icons[icon]}
            style={[{width: size, height: size, resizeMode: 'cover'}, style]}

        />
    );
    if (onPress) {
        return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>;
      }
      return image;
};
export default Icon;

// ต้องสร้างไฟล์ icons ใน constants -> icons ก่อนเพื่อดึงข้อมูล หรือ require ขอใช้รุปมา
//  ต่อมาก็สร้าง Icon.js in component 