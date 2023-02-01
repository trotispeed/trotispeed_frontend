//import liraries
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


// create a component
export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      
    </View>
  );
}



// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
