import React from 'react';
import MapView from 'react-native-maps';
<<<<<<< HEAD
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Marker } from 'react-native-maps';

// create a component
export default function MapScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 35.777500,
        longitude: -5.799120,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >

<Marker
  coordinate={{ latitude : 35.777500 , longitude : -5.799120 }}
  
/>
      </MapView>
      <View style={styles.bottom}>
        <TouchableOpacity
                style={styles.button} onPress={() => navigation.push('Counter')}
            >
                <Text style={{textAlign: 'center', color: 'white', fontSize: 20,justifyContent:'center'}}>Submit</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top:{
    borderBottomColor:'#45DE88',
    borderBottomWidth:4,
    flex:1/3,
     backgroundColor:'white',
  },
  map: {
    width: '100%',
    flex:4,
    height: '93%',
  },
  bottom:{
    flex:1.04,
    justifyContent:'center',
    borderTopColor:'#45DE88',
    borderTopWidth:4,
    // textAlign:'center',
    width: '100%',
    height: '7%',
    backgroundColor:'white'
  },
  button: {
    backgroundColor: '#45DE88',
    borderRadius: 200,
    padding:10,
    marginHorizontal:120,
    paddingHorizontal:20,
    margin:-20,
},
});
