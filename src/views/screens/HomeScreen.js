//import liraries
import React, {useState} from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TextInput, View, Image} from 'react-native';



const DATA2 = [
  {
    id: '1',
    image: require('../../img/mi.png'),
  },
  {
    id: '2',
    image: require('../../img/ka.png'),
    
  },
  {
    id: '3',
    image: require('../../img/ra.png'),
  },
  {
    id: '4',
    title: 'Four',
    image: require('../../img/ka.png'),
   
  },
  
];




// create a component
const HomeScreen = () => {
  const [selectedId, setSelectedId] = useState();
  const [username, setUserName] = React.useState('');
  const [DATA , SetData] = useState(DATA2)
  
  
 
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#B3B3BB' : '#45DE88';
    const color = item.id === selectedId ? 'white' : 'black';
    
    

    return (
      
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
      
    );
  };

  return (
    <View style={styles.container}>
      
      
      <TextInput
                style={styles.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setUserName}
                value={username}
                placeholder="SEARCH"
            />
            
    <SafeAreaView>
      <FlatList horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      
    </SafeAreaView>
{/* here is the component */}
    </View>
    
    
  );
  
};



const Item = ({item, onPress, backgroundColor, textColor}) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    
    <Image
        style={styles.image}
        source= {item.image}
      />
      
  </TouchableOpacity>
  
);


// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',

  },
  chai: {
    color: 'red',
  },
  item: {
    height: 130,
    width: 150,
    paddingLeft: 10,
    paddingTop: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 15,
  },
  title1: {
    textAlign: 'center',
    marginTop: 300,
    marginBottom: 15,
    fontSize: 15,
    color: 'grey',
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
    color: 'grey',
},
title: {
  fontSize: 15,

},
image:{
  height: 100,
    width: 115,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 15,
}
});

export default HomeScreen;