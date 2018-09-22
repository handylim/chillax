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
import Emoji from 'react-emoji-render';

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Suggestions extends Component<{}> {
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
    this.props.screenProps.navigate('Forum');
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>

        <View style={{margin: 16, justifyContent: 'center', alignItems: 'center'}}>
          <Text h4 style={{marginLeft: 8, marginBottom: 8}}>Suggestions: </Text>
            <Text style={{padding: 10, color: colors.main.black, fontSize: 15}}>
{ `Ways to help cope with the feeling:
    -Write down your feelings and record it in the diary
    -Talk to people that are close to you
    -Mindful colouring
    -Meditate for 10 minutes
    -Take a short break from work and have a cup of tea`
}
            </Text>
            <View style={{height: 0.7, backgroundColor: colors.main.placeholderColor, width: SCREEN_WIDTH}}></View>
          <Text style={{padding: 10, color: colors.main.black, fontSize: 15}}>
{ `Click on the hashtags below to read more about how to cope with these feelings and the experiences tackling them in the forum:`
}
          </Text>
          <TouchableOpacity onPress={()=>(this.onPress())} activeOpacity={1}>
          <Text style={{ color: colors.main.buttonBlue, fontSize: 15}}>
            #depression#stress#grades
          </Text>
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
    width: SCREEN_WIDTH - 20,
    backgroundColor: colors.main.buttonBlue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.main.purple,
    flexDirection: 'row'
  },
  container : {
    backgroundColor: colors.main.white,
    flex: 1,
    alignItems: 'center',
  },

});
