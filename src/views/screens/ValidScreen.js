import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Login} from '../../api/user';


function ValidScreen({navigation}) {


    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [incorrect, setIncorrect] = React.useState(0);




    return (
        <View style={styleSheet.appContainer}>
            <Text style={styleSheet.title}>validation</Text>

            <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setUserName}
                value={username}
                placeholder="USERNAME"
            />

            <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setPassword}
                value={password}
                placeholder="PASSWORD"
                secureTextEntry={true}
            />
                        <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setPassword}
                value={password}
                placeholder="PASSWORD"
                secureTextEntry={true}
            />
                        <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setPassword}
                value={password}
                placeholder="PASSWORD"
                secureTextEntry={true}
            />
                        <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setPassword}
                value={password}
                placeholder="PASSWORD"
                secureTextEntry={true}
            />




            <TouchableOpacity
                style={styleSheet.button}
            >
                <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>validation</Text>
            </TouchableOpacity>

        </View>
    );
}


const styleSheet = StyleSheet.create({
    title: {
        textAlign: 'center', marginBottom: 50, fontSize: 30, color: 'grey',

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
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#45DE88',
        marginTop: 20,
        width: 280,
        height: 50,
        marginVertical: 10,
        padding: 10,
        borderRadius: 200,


    },
    Image: {
        height: 100,
        width: 350,
        

    },
    Button: {
        backgroundColor: '#45DE88',
        marginTop: 20,
        width: 280,
        height: 50,
        marginVertical: 10,
        padding: 10,
        borderRadius: 200,
        marginBottom: 50,
    }

})

export default ValidScreen;