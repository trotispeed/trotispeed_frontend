import * as React from 'react';
import { View , Text, Button} from 'react-native';

function HomeScreen({ navigation }) {
  
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40}}>search troti</Text>
      <Button
        title="Troti"
        onPress={() => navigation.push('Troti')}
      />
      <Button
        title="login"
        onPress={() => navigation.push('Login')}
      />
    </View>
  );
}


export default HomeScreen;