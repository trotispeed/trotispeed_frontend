//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios, * as others from 'axios';



function refresh(h , m , s) {
    axios.get('http://192.168.0.119:8000/api/counter/1/1')
    .then(response => {
        // Handle response
        h(response.data.data.counter.h)
        m(response.data.data.counter.i)
        s(response.data.data.counter.s)
        console.log("=========",response.data);
    })
    .catch(err => {
        // Handle errors
        console.error(err);
    });
}



// create a component
const CounterScreen = ({navigation}) => {

    const [h, setH] = React.useState(0);
    const [m, setM] = React.useState(0);
    const [s, setS] = React.useState(0);


    axios.get('http://192.168.0.119:8000/api/counter/1/1')
    .then(response => {
        // Handle response
        setH(response.data.data.counter.h)
        setM(response.data.data.counter.i)
        setS(response.data.data.counter.s)
        console.log("=========",response.data);
    })
    .catch(err => {
        // Handle errors
        console.error(err);
    });

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{alignItems: 'center'}}>
                <Text style={{marginTop: 80, fontSize: 20, color: 'grey'}}> Welcome @ Chaimae </Text>
                <Text style={{ fontSize:28, marginTop: 80, color: 'grey', fontWeight: 'bold'}}>hh:mm:ss</Text>
                <Text style={{ fontSize:28, marginTop: 50, color: 'black', fontWeight: 'bold'}}>{h}:{m}:{s}</Text>
                </View>
            
            </View>
            <View style={styles.bottom}>
                <View style={{alignItems: 'center',}}>
                {/* <Text style={{fontWeight: 'bold', fontSize:28, marginTop: 30}}>make anther </Text> */}
                {/* <Text style={{fontWeight: 'bold', fontSize:28}}>resrvation </Text> */}
                <TouchableOpacity
                style={styles.Button}

                onPress={() => refresh(setH, setM , setS)}

            >
                <Text style={{textAlign: 'center', color: 'white', fontSize: 25, fontWeight: 'bold'}}>Refresh</Text>
            </TouchableOpacity>
                </View>
                
                
            
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
    
    bottom: {
        flex: 4,
        
    },
    Button: {
        backgroundColor: '#45DE88',
        marginTop: 70,
        width: 230,
        height: 55,
        
        padding: 10,
        borderRadius: 200,
        
    }
    

});

//make this component available to the app
export default CounterScreen;