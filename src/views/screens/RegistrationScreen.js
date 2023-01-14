import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {register} from '../../api/user';

function RegistartionScreen({navigation}) {

    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');
    const [incorrect, setIncorrect] = React.useState(0);

    let flag;
    if (incorrect != 0) {
        flag = <Text style={{color: 'red'}}>User Already Exists</Text>
    }

    function handleLogin() {
        if (password === password2) {
            if(password.length > 8){
                const data = {name: username, password};
                return register(data, navigation, setIncorrect);
            }else{
                alert("Password is too short")
            }

        } else {
            alert('Passwords doesnt match')
        }

    }

    return (<View style={styleSheet.appContainer}>


            <Image style={styleSheet.Image} source={require('../../../assets/fonts/TrotiSpeed1.png')}/>
            <Text style={styleSheet.title}>sign up</Text>


            <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setUserName}
                placeholder="USERNAME"
            />

            <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setPassword}
                placeholder="PASSWORD"
                secureTextEntry={true}
            />

            <TextInput
                style={styleSheet.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setPassword2}
                placeholder="CONFIRME PASSWORD"
                secureTextEntry={true}
            />


            {flag}


            <TouchableOpacity
                style={styleSheet.button}
                // onPress={() => navigation.push('Login')}
                onPress={handleLogin}
            >
                <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>Sign UP</Text>
            </TouchableOpacity>

            {/*<TouchableOpacity*/}
            {/*    style={styleSheet.button}*/}
            {/*    onPress={() => navigation.push('Home')}*/}
            {/*>*/}
            {/*    <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>sign up</Text>*/}
            {/*</TouchableOpacity>*/}

        </View>);
}


const styleSheet = StyleSheet.create({
    title: {
        textAlign: 'center', marginBottom: 50, fontSize: 30, color: 'grey',

    }, input: {
        height: 40,
        margin: 12,
        paddingLeft: 30,
        borderRadius: 15,
        borderColor: '#45DE88',
        color: 'grey',
        borderWidth: 2,
        width: 300,
        height: 50,

    }, appContainer: {
        alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#FFFFFF',
    }, button: {
        backgroundColor: '#45DE88',
        marginTop: 20,
        width: 280,
        height: 50,
        marginVertical: 10,
        padding: 10,
        borderRadius: 200,

    }, Image: {
        height: 100, width: 350,

    }


})


export default RegistartionScreen;

