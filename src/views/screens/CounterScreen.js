//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



// create a component
const CounterScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.countext}>
                <Text style={{fontSize: 30, color: 'grey', fontFamily: 'bold'}}>DD</Text>
                <Text style={{fontSize: 30, color: 'grey', fontFamily: 'bold'}}>/</Text>
                <Text style={{fontSize: 30, color: 'grey', fontFamily: 'bold' }}>HH</Text>
                <Text style={{fontSize: 30, color: 'grey', fontFamily: 'bold' }}>/</Text>
                <Text style={{fontSize: 30, color: 'grey', fontFamily: 'bold' }}>MM</Text>
                <Text style={{fontSize: 30, color: 'grey', fontFamily: 'bold' }}>/</Text>
                <Text style={{fontSize: 30, color: 'grey', fontFamily: 'bold' }}>SS</Text>
                </View>
                <View style={styles.countumber}>
                <Text style={{fontSize: 30, color: '#45DE88' }}>22</Text>
                <Text style={{fontSize: 30, color: '#45DE88' }}>:</Text>
                <Text style={{fontSize: 30, color: '#45DE88' }}>10</Text>
                <Text style={{fontSize: 30, color: '#45DE88' }}>:</Text>
                <Text style={{fontSize: 30, color: '#45DE88' }}>12</Text>
                <Text style={{fontSize: 30, color: '#45DE88' }}>:</Text>
                <Text style={{fontSize: 30, color: '#45DE88' }}>33</Text>
                </View>
            </View>
            <View style={styles.bottom}>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    top: {
        flex: 5,
        
    },
    countext:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginTop: 170 
    },
    countumber: {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        marginTop: 25
    },
    bottom: {
        flex: 2,
        backgroundColor: "red"
    }

});

//make this component available to the app
export default CounterScreen;



