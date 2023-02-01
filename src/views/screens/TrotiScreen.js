import React from 'react';
import {StyleSheet, View} from 'react-native';

const TrotiScreen = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 5, backgroundColor: 'darkorange'}} />
      <View style={{flex: 2, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrotiScreen;

