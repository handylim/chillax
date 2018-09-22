console.disableYellowBox = true;

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
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
  SafeAreaView,
  FlatList,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { colors } from '../constants/colors';
import { posts, counselors } from '../constants/posts';

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Counselors extends Component<{}> {
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
  //     )]
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // }
  onPress() {
    const url = 'http://lindacarles.youcanbook.me'
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <FlatList
              data={counselors.counselors}
              renderItem={({item, index}) =>
                <View style={{padding: 8, marginVertical: 8, marginHorizontal: 10, borderWidth: 0.7, borderRadius: 12, borderColor: colors.main.placeholderColor}}>
                  <View style={{flexDirection: 'row'}}>
                  <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: item.profilePicture}}/>
                  <View style={{flexDirection: 'column', marginHorizontal: 12, justifyContent: 'center'}}>
                    <Text style={{fontSize: 15, marginBottom: 4}}>{item.name}</Text>
                    <Text>Experience:  2+</Text>
                  </View>
                  </View>
                  <Text style={{fontSize: 15, marginVertical: 8}}>{item.bio}</Text>
                  <View style={{flexDirection: 'row', flex: 1}}>
                  <TouchableOpacity style={{flex: 1}}>
                    <Text style={{fontSize: 15, textAlign: 'center', color: colors.main.buttonBlue}}>Email me</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 1}} onPress={()=>(this.onPress())}>
                    <Text style={{fontSize: 15, textAlign: 'center', color: colors.main.buttonBlue}}>Book me</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              }
            />
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
  container : {
    backgroundColor: colors.main.white,
    flex: 1,
    alignItems: 'center',
  },

});
