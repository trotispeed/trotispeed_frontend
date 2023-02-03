import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import { color } from 'react-native-reanimated';
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
        {/* //this is top view */}
        <View style={styles.top}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push('Test')}>
        <BackIcon name="chevron-left" size={40} color="white">

        </BackIcon>
        
      </TouchableOpacity>
        </View>


        {/* //this is medium view */}
        <View style={styles.medium}>
          <View style={styles.flx}>
            <View style={styles.text}>
            <View>
            <Text style={{fontSize: 12, color: 'grey', marginTop: 35}}>battery</Text>
            <Text style={{fontSize: 30, color: 'grey'}}>125</Text>
            </View>
            <View>
            <Text style={{fontSize: 12, color: 'grey', marginTop: 70}}>speed</Text>
            <Text style={{fontSize: 30, color: 'grey'}}>32</Text>
            </View>
            <View>
            <Text style={{fontSize: 12, color: 'grey', marginTop: 70}}>weight</Text>
            <Text style={{fontSize: 30, color: 'grey'}}>12,5</Text>
            </View>
            
            </View>
            
        <Image  style = {styles.image} source={require('../../img/scooter.png')}/>
          </View>

          {/* //this is bottom view */}
        
        </View>
        <View style={styles.bottom}>
          <View style = {styles.up}>
          <Text style = {styles.title}>xiaomi note 10 pro</Text>
          <Text style = {styles.ti}>6km</Text>
          </View>
          <View style = {styles.down}>
          <TouchableOpacity style={styles.boton} onPress={() => navigation.push('Valid')}>
            <Text style = {styles.tigreen}>available now</Text>
          </TouchableOpacity>
          <Text style = {styles.tiwhite}>200DH</Text>
          </View>
          
        </View>
    </View>
  );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // this is top
  top: {
    flex: 1.2,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: "#817D7D",
    borderRadius: 10,
    height: 42,
    width: 41,
    marginTop: 69,
    marginLeft: 35,
  },


  // this is medium
  medium: {
    flex: 5,
    backgroundColor: 'white'
  },
  image: {
    marginLeft: 60,
    marginTop: 28,
    height: 387, 
    width: 360, 
    backgroundColor: "#ffffff", 
    
  },
  flx: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  text: {
    marginLeft: 38,
    marginTop: 30,
  },
  
  //this is bottom
  bottom: {
    flex: 2.5,
    backgroundColor: '#45DE88'
  },
  up: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 45,
    marginRight: 28,
    marginLeft: 15
  },
  title: {
    color: 'white',
    fontSize: 29,
    marginLeft: 15
  },
  ti: {
    color: 'grey',
    fontSize: 30
  },
  down: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 50,
    marginRight: 30,
    marginLeft: 30
  },
  boton: {
    borderRadius: 30,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingLeft: 23,
    paddingRight: 23,
    paddingBottom: 15

  },
  tigreen: {
    color: '#45DE88',
    fontSize: 25,
    fontWeight: "bold"
  },
  tiwhite: {
    color: 'white',
    fontSize: 25,
    paddingTop: 15,
  }

});

export default TrotiScreen;

