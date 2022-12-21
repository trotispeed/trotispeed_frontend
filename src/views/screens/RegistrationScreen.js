import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function RegistartionScreen({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);


  return (
    <View style={styleSheet.appContainer}>
      
      <Text style={styleSheet.title}>TrotiSpeed</Text> 

      {/*<Image style={styleSheet.title} source={require('../')} />*/}
      <Text style={styleSheet.title}>Login</Text>



      <TextInput
        style={styleSheet.input}
        placeholderTextColor={'#45DE88'}
        onChangeText={onChangeNumber}
        placeholder="Username"
      />

      <TextInput
        style={styleSheet.input}
        placeholderTextColor={'#45DE88'}
        onChangeText={onChangeNumber}
        placeholder="Password"
      />

<TextInput
        style={styleSheet.input}
        placeholderTextColor={'#45DE88'}
        onChangeText={onChangeNumber}
        placeholder="Confirmer Password"
      />

     

      <TouchableOpacity 
      style={styleSheet.button}
      onPress={() => navigation.push('Login')}
      >
        <Text style={{textAlign:'center', color:'white', fontSize:20}}>login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styleSheet.button}
      onPress={() => navigation.push('Home')}
      >
        <Text style={{textAlign:'center', color:'white', fontSize:20}}>register</Text>
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
    margin: 12,
    
    borderRadius: 15,
    borderColor: '#45DE88',
    borderWidth: 2,
    padding: 25,
  },
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor:'#45DE88', 
    paddingHorizontal:19,
    marginVertical:10,
    padding:10,
    borderRadius:200,
    }
})

export default RegistartionScreen;

