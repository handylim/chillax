import React, { Component } from 'react';
import { Root } from './config/routes';
import {
  StatusBar,
  View,
  StyleSheet
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Root />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  application : {
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
});
export default App;
