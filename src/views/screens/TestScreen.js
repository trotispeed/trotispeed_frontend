//import liraries
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';


// create a component
const TestScreen = ({navigation}) => {

    const [username, setUserName] = React.useState('');
    const [data , SetData] = useState([]);
    const [data2 , SetData2] = useState([]);

    return (
        <View style={styles.container}>
            <Text style={{marginTop: 70}}> Welcome @ Chaimae </Text>
            <TextInput
                style={styles.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setUserName}
                value={username}
                placeholder="SEARCH"
            />

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            
            
                <View >
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={styles.title} source={require('../../img/mi.png')}/>
                        
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={styles.title} source={require('../../img/ra.png')}/>
                        
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={styles.title} source={require('../../img/ka.png')}/>
                        
                    </TouchableOpacity>
                </View>
                
                
            </ScrollView>

         <ScrollView showsVerticalScrollIndicator={false}>

            
                <View >


                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('Troti')}>

                    
                        <Image style={styles.troti} source={require('../../img/scooter.png')}/>
                        
                    </TouchableOpacity>
                </View>
                <View >


                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('Troti')}>

                    
                        <Image style={styles.troti} source={require('../../img/scooter.png')}/>
                        
                    </TouchableOpacity>
                </View>
                <View >


                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('Troti')}>

                    
                        <Image style={styles.troti} source={require('../../img/scooter.png')}/>
                        
                    </TouchableOpacity>
                </View>
            
            </ScrollView>


        </View>
    );
};



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        
    },

    input: {

        height: 40,
        margin: 15,
        paddingLeft: 30,
        borderRadius: 15,
        borderColor: '#45DE88',
        borderWidth: 2,
        width: 300,
        height: 50,
        color: 'grey',
    },
    title: {
        
        height: 130,
        width: 150,
        backgroundColor: "#45DE88",
        fontSize: 20,
        padding: 10,
        marginLeft: 10,
        marginBottom: 90,
        borderRadius: 30,

    },
    troti:{
        backgroundColor: "#45DE88",
        marginTop: 10,
        padding: 50,
        borderRadius: 30,
        height: 400,
        width: 380,

    }


});

//make this component available to the app
export default TestScreen;
