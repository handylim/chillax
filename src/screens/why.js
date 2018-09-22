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
import { Text, Button, CheckBox } from 'react-native-elements';
import Emoji from 'react-emoji-render';

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Why extends Component<{}> {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    // console.log('login constructor');
    // console.log(NetworkAPI.getHost());
    this.state = {
      checked: false,
      checked1: false,

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

  handlePress() {
    console.log('kdsds');
    this.setState({
      checked: !this.state.checked
    })
  }
  handlePress1() {
    console.log('kdsds');
    this.setState({
      checked1: !this.state.checked1
    })
  }
  handleNext() {
    this.props.navigation.navigate('Suggestions');
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>

        <View style={{margin: 16, justifyContent: 'center'}}>
          <Text h4 style={{marginLeft: 8, marginBottom: 8}}> Why are you feeling this way?</Text>

          <CheckBox
            onIconPress={()=>(this.handlePress())}
            title='Existential crisis'
            checked={this.state.checked}
           />
           <CheckBox
             title='Relationship with peers'
             checked={false}
            />
            <CheckBox
              title='Bullying'
              checked={false}
             />
             <CheckBox
               title='Romantic relationship'
               checked={false}
              />
              <CheckBox
                title='Schoolwork'
                onIconPress={()=>(this.handlePress1())}
                checked={this.state.checked1}
               />
               <CheckBox
                 title='Grades'
                 checked={false}
                />
          <TouchableOpacity
            onPress={()=>(this.handleNext())}
            style={styles.button}>
            <Text style={{padding: 10, color: colors.main.white, fontSize: 17}}>Next</Text>
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
    width: 100,
    backgroundColor: colors.main.buttonBlue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.main.purple,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  container : {
    backgroundColor: colors.main.white,
    flex: 1,
    alignItems: 'center',
  },

});
