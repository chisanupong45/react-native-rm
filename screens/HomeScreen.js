import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import { PLACES, TOP_PLACES } from '../data/index.js';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';

/* const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
}; */
// {flex:1, alignItems: 'center', justifyContent: 'center'}
const HomeScreen = () => {
    return (
        <View style = {styles.container}>
            <MainHeader title = "Insect App!"></MainHeader>
            {/* from folder componet -> ScreenHeader */}
            <ScreenHeader mainTitle="สวัสดี," secondTitle="College Of Computing" />
            {/* from folder componet -> TopPlaces */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Top place from file /data -> index.js  */}
                <TopPlacesCarousel  list={TOP_PLACES}/>
                {/* ปุ่มทั้งหมดมาจากไฟล์ SectionHeader */}
                <SectionHeader  title="เลือกสิ่งที่คุณสนใจได้ที่นี้" buttonTitle="ทั้งหมด" onPress={() => {}}/>
                <TripsList list={PLACES}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
       /*  alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF67E' */
    },
});

export default HomeScreen;