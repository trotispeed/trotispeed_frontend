//import liraries
import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Valid} from '../../api/user';




// create a component
function ValidScreen({navigation}) {


    const [username, setUserName] = React.useState('');
    const [tele, setTele] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [cin, setCin] = React.useState('');
    const [incorrect, setIncorrect] = React.useState(0);

    function handleLogin() {
        const data = {user_name: username, email: email, scooter_id: 1, cin: cin, number: tele };
        console.log("frtghygtf +++++++==",data)
        return Valid(data, navigation, setIncorrect);
    }

    return (
        <View style={styleSheet.appContainer}>
            <Text style={styleSheet.title}>validation</Text>

            <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setUserName}
                value={username}
                placeholder="User ame"
            />

            <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setTele}
                value={tele}
                placeholder="N Tele"
               
            />
                        <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setEmail}
                value={email}
                placeholder="Gmail"
                
            />
                        <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setCin}
                value={cin}
                placeholder="CIN"
                
            />
            <TouchableOpacity
                style={styleSheet.button}
                onPress={handleLogin}
            >
                <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>validation</Text>
            </TouchableOpacity>

            

        </View>
    );
}



// define your styles
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


//make this component available to the app
export default ValidScreen;