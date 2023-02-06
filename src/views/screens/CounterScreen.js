//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



// create a component
const CounterScreen = () => {
    return (
        <View style={styles.container}>
            <View></View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default CounterScreen;



