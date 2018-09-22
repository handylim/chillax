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
  FlatList
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { colors } from '../constants/colors';
import { posts } from '../constants/posts';

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Forum extends Component<{}> {
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


  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <FlatList
              data={posts.posts}
              renderItem={({item, index}) =>
                <View style={{padding: 8, marginVertical: 8, marginHorizontal: 10, borderWidth: 0.7, borderRadius: 12, borderColor: colors.main.placeholderColor}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: colors.main.buttonBlue}}>{item.createdBy}</Text>
                    <Text>{item.createdDate}</Text>
                  </View>
                  <Text style={{fontSize: 15, marginVertical: 8}}>{item.content}</Text>
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
