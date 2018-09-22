console.disableYellowBox = true;

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar ,
  TouchableOpacity,
  Linking,
  TextInput,
  Alert,
  Keyboard,
  Image,
  AsyncStorage,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { colors } from '../constants/colors';
import { Text, Button } from 'react-native-elements';
var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Inter extends Component<{}> {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    // console.log('login constructor');
    // console.log(NetworkAPI.getHost());
    this.state = {

    };
  }
  componentDidMount() {

  }

  // _showHome() {
  //   const resetAction = StackActions.reset({
  //     index: 0,
  //     actions: [NavigationActions.navigate({
  //       routeName: 'Home',
  //       params: {
  //           user: this.state.user,
  //           token: this.state.token,
  //         }
  //       }
  //     )],
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // }
  onPress() {
    this.props.navigation.navigate('Rate');
    //console.log('onpere');
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>

        <View style={{margin: 16, justifyContent: 'center', alignItems: 'center'}}>
          <Text h4 style={{marginLeft: 8, marginBottom: 8}}>How are you feeling?</Text>
          <TouchableOpacity
            onPress={()=>(this.onPress())}
            style={styles.button}>
            <Text style={{padding: 8, color: colors.main.white, fontSize: 17}}>Stressed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{padding: 8, color: colors.main.white, fontSize: 17}}>Pleasant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{padding: 8, color: colors.main.white, fontSize: 17}}>Anxious</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{padding: 8, color: colors.main.white, fontSize: 17}}>Depressed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{padding: 8, color: colors.main.white, fontSize: 17}}>Happy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{padding: 8, color: colors.main.white, fontSize: 17}}>Sad</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )

  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.main.white,
  },
  button: {
    marginVertical: 8,
    width: SCREEN_WIDTH / 2,
    backgroundColor: colors.main.buttonBlue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container : {
    backgroundColor: colors.main.white,
    flex: 1,
    alignItems: 'center',
  },

});
