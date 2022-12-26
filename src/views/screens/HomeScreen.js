import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

function HomeScreen({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <View style={styleSheet.appContainer}>
      <TextInput
        style={styleSheet.input}
        placeholderTextColor={'#817D7D'}
        onChangeText={onChangeNumber}
        placeholder="SEARCH"
      />
      
    </View>
  );
}

const styleSheet = StyleSheet.create({
    appContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  input: {
    margin: 15,
    paddingLeft: 40,
    borderRadius: 30,
    borderColor: '#45DE88',
    borderWidth: 2,
    width: 250,
    height: 50,
  }

})

export default HomeScreen;