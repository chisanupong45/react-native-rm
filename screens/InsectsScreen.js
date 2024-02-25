import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native'

const InsectsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Insects Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default InsectsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9BCF53'
    },
});