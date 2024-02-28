import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native'
import MainHeader from '../components/MainHeader';
import SearchInput from '../components/Search/SearchInput';
import TabSearch from '../components/TabSearch';

const tabSearch = [
    {
        title: 'All',
        content: () => (
            <View>
                <Text>All</Text>
            </View>
        ),
    },
    {
        title: 'Class',
        content: () => (
            <View>
                <Text>Class</Text>
            </View>
        ),
    },
]

const InsectsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <MainHeader title='Search' />
            <SearchInput />
            <TabSearch items={tabSearch} />
        </View>
    );
};

export default InsectsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F5F5',
    },
});