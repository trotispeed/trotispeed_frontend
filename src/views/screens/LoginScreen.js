import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


function LoginScreen({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);
  

  return (
    <View style={styleSheet.appContainer}>
    <Image style={styleSheet.Image} source={require('../../../assets/fonts/TrotiSpeed1.png')} />
      <Text style={styleSheet.title}>login</Text>



      <TextInput
        style={styleSheet.input}
        placeholderTextColor={'#45DE88'}
        onChangeText={onChangeNumber}
        placeholder="USERNAME"
      />

      <TextInput
        style={styleSheet.input}
        placeholderTextColor={'#45DE88'}
        onChangeText={onChangeNumber}
        placeholder="PASSWORD"
        
        secureTextEntry={true}
      />

<Text style={{color:'red'}}>Password incorrect</Text>
     

      <TouchableOpacity 
      style={styleSheet.button}
      onPress={() => navigation.push('Home')}
      >
        <Text style={{textAlign:'center', color:'white', fontSize:20}}>login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styleSheet.Button}
      onPress={() => navigation.push('Register')}
      >
        <Text style={{textAlign:'center', color:'white', fontSize:20}}>sign up</Text>
      </TouchableOpacity>

    </View>
  );
}



const styleSheet = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 30,
    color:'grey',
    
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
    color:'grey',
  },
    appContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor:'#45DE88', 
    marginTop:20,
    width: 280,
    height: 50,
    marginVertical:10,
    padding:10,
    borderRadius:200,
    
    
    },
    Image: {
      height: 100,
      width: 350,
      
    },
    Button: {
      backgroundColor:'#45DE88', 
    marginTop:20,
    width: 280,
    height: 50,
    marginVertical:10,
    padding:10,
    borderRadius:200,
    marginBottom: 50,
    }

})

export default LoginScreen;
