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
  ScrollView,
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

export default class Additional extends Component<{}> {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    // console.log('login constructor');
    // console.log(NetworkAPI.getHost());
    this.state = {
      checked: false,
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
  toggle(){
    this.setState({
      checked: !this.state.checked,
    })
    //this.setState(prevState => {checked: !prevState.checked})
  }
  handleNext() {
    this.props.navigation.navigate('Why');
  }

  render() {
    const options = ['Not at all',  'Several days' , 'More than half of the days', 'Nearly every day'];
    return (
      <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={{margin: 16}}>
          <Text h5 style={{marginHorizontal: 8, marginBottom: 8, fontSize: 20}}>How would you rate the intensity of the feeling?</Text>
          <TouchableOpacity
            onPress={()=>(this.onPress())}
            style={styles.button}>
            <Text style={{padding: 10, color: colors.main.black, fontSize: 17}}>Little interest or pleasure in doing things</Text>
            {
              options.map((value, index)=>(
                <CheckBox
                    title={value}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={index == 0 ? this.state.checked : false}
                    onIconPress={()=>(this.toggle())}
                  />
              ))
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{padding: 10, color: colors.main.black, fontSize: 17}}>Tired or have little energy</Text>
            {
              options.map((value, index)=>(
                <CheckBox
                    title={value}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onIconPress={()=>(this.toggle())}
                  />
              ))
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{padding: 10, color: colors.main.black, fontSize: 17}}>Poor appetite or overeating</Text>
            {
              options.map((value, index)=>(
                <CheckBox
                    title={value}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onIconPress={()=>(this.toggle())}
                  />
              ))
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{padding: 10, color: colors.main.black, fontSize: 17}}>Thoughts that you would be better off dead, or of hurting yourself</Text>
            {
              options.map((value, index)=>(
                <CheckBox
                    title={value}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onIconPress={()=>(this.toggle())}
                  />
              ))
            }
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>(this.handleNext())}
            style={styles.nextButton}>
            <Text style={{padding: 10, color: colors.main.white, fontSize: 17}}>Next</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>

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
    borderRadius: 20,
    borderColor: colors.main.purple,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nextButton: {
    marginVertical: 8,
    width: 100,
    alignSelf: 'center',
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
