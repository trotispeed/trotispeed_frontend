import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import BackIcon from 'react-native-vector-icons/Feather';
import LoginScreen from './LoginScreen';

const TrotiScreen = ({navigation}) => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
        <View style={{flex: 1.2, backgroundColor: 'white'}}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push('Test')}>
        <BackIcon name="chevron-left" size={45} color="white"></BackIcon>
        
      </TouchableOpacity>
        </View>
        <View style={{flex: 5, backgroundColor: 'white'}}>
        <Text>battery</Text>
        <Text>125</Text>
        <Text>battery</Text>
        <Text>125</Text>
        <Text>speed</Text>
        <Text>32</Text>
        <Text>weight</Text>
        <Text>12,5</Text>
        <Image  style = {styles.image} source={require('../../img/scooter.png')}/>
        
        </View>
        <View style={{flex: 2, backgroundColor: '#45DE88'}}>
          <View style = {{alignContent: 'space-around',}}><Text>xiaomi note 10 pro</Text><Text>6km</Text></View>
          <TouchableOpacity><Text>available now</Text></TouchableOpacity><Text>200DH</Text>
        </View>
    </View>
  );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#817D7D",
    borderRadius: 10,
    height: 45,
    width: 46,
    marginTop: 65,
    marginLeft: 29,
  },
  image: {
    
    height: 460, 
    width: 460, 
    backgroundColor: "#ffffff", 
    marginLeft: 130,
  }
});

export default TrotiScreen;

