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
        <BackIcon name="chevron-left" size={47} color="white"></BackIcon>
        
      </TouchableOpacity>
        </View>
        <View style={{flex: 5, backgroundColor: 'white'}}>
        <Image style={styles.Image} source={require('../../img/scooter.png')}/>
          
        </View>
        <View style={{flex: 2, backgroundColor: '#45DE88'}}>

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
    height: 50,
    width: 50,
    marginTop: 50,
    marginLeft: 24,
  },
  image: {

  }
});

export default TrotiScreen;

