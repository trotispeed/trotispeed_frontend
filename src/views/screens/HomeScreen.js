import React, {useState} from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TextInput, View} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'first',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Four',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d47',
    title: 'Five',
  },
];













const HomeScreen = () => {
  const [selectedId, setSelectedId] = useState();
  const [username, setUserName] = React.useState('');
  
  
 
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
      <Text style={styles.title}>Welcome @ Chaimae</Text>
      <TextInput
                style={styles.input}
                placeholderTextColor={'#45DE88'}
                onChangeText={setUserName}
                value={username}
                placeholder="SEARCH"
            />
    <SafeAreaView >
      <FlatList horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
    </View>
    
  );
};

const Item = ({item, onPress, backgroundColor, textColor}) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginTop: 30,
    
  },
  item: {
    height: 100,
    width: 115,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 15,
  },
  title: {
    fontSize: 10,
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
  textAlign: 'center',
  marginBottom: 15,
  fontSize: 20,
  color: 'grey',

},
});




export default HomeScreen;