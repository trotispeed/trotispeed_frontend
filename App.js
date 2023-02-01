//import liraries

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import components
import HomeScreen from './src/views/screens/HomeScreen';
import LoginScreen from './src/views/screens/LoginScreen';
import RegistrationScreen from './src/views/screens/RegistrationScreen';
import TrotiScreen from './src/views/screens/TrotiScreen';
import TestScreen from './src/views/screens/TestScreen';
import ValidScreen from './src/views/screens/ValidScreen';
import MapScreen from './src/views/screens/MapScreen';
import CounterScreen from './src/views/screens/CounterScreen';

// navigation component

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login">
        <Stack.Screen  name="Home" component={HomeScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Register" component={RegistrationScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Test" component={TestScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Troti" component={TrotiScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Valid" component={ValidScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Map" component={MapScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Counter" component={CounterScreen} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

