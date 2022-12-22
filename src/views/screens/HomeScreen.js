
import React from 'react'
import { View , Text, Button} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';



function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    'Righteous': require('../../../assets/fonts/Righteous-Regular.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontFamily: 'Righteous', fontSize: 40}}>Home screens</Text>
      <Button
        title="Resiter"
        onPress={() => navigation.push('Register')}
      />
    </View>
  );
}


export default HomeScreen;