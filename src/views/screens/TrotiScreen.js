import * as React from 'react';
import { View , Text, Button} from 'react-native';

function TrotiScreen({ navigation }) {
  
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40}}>troti show</Text>
      <Button
        title="Home"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}


export default TrotiScreen;