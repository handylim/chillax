console.disableYellowBox = true;

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  View,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
  Button,
  AsyncStorage
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerActions
} from 'react-navigation';

import Counselors from '../screens/counselors';
import Forum from '../screens/forum';
import Inter from '../screens/inter';
import Rate from '../screens/rate';
import Additional from '../screens/additional';
import Why from '../screens/why';
import Suggestions from '../screens/suggestions';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const TabbarHome = createBottomTabNavigator({
      Self: {
        screen: props => <RootInterNavigation
          screenProps={
            props.navigation
          }/>,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => {
            return <IconEntypo name="leaf" size={25} color={tintColor} />;
          }
        }
      },
      Counsellors: {
        screen: props => <RootCounselorsNavigation
          screenProps={
            props.navigation
          }/>,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => {
            return <IconEntypo name="slideshare" size={28} color={tintColor} />;
          }
        }
      },
      Forum: {
        screen: props => <RootForumNavigation
          screenProps={
            props.navigation
          }/>,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => {
            return <IconEntypo name="chat" size={23} color={tintColor} />;
          }
        }
      },

    },
      {
        tabBarPosition: 'bottom',
        navigationOptions: {
          headerBackTitle: null,
          headerTintColor: '#1A1B36',
        },
        tabBarOptions : {
          activeTintColor:'#1A1B36',
          inactiveTintColor:'#888',
          style: {
            backgroundColor: '#f2f2f2',
            borderTopWidth: 0.7,
            borderTopColor: '#bbb',
            paddingTop: 5,
          },
          labelStyle: {
            fontSize: 12,
            paddingTop: 0,
          },
          showLabel: true,
          indicatorStyle: {
              backgroundColor:'#1A1B36',
          }
        }
});

const CounselorsNavigation = createStackNavigator({
  Counselors: {
    screen: Counselors,
    navigationOptions: ({screenProps}) => ({
      title: 'Counselors',  // Title to appear in status bar
    }),
  },
}, {
  navigationOptions: {
        headerTintColor: '#1A1B36',
        headerTitleStyle: {
                  textAlign: 'center',
                  flexGrow:1,
                  alignSelf:'center',
              },
      },
});
const RootCounselorsNavigation = createStackNavigator(
  {
    Counselors: {
      screen: CounselorsNavigation,
    },
  },
  {
    mode: 'modal',
    navigationOptions: {
      title: 'Counsellors',
      headerTintColor: '#1A1B36',

    }
  }
)
const ForumNavigation = createStackNavigator({
  Forum: {
    screen: Forum,
    navigationOptions: {
      title: 'Forum',  // Title to appear in status bar
    },
  },
}, {
  navigationOptions: {
        headerTintColor: '#1A1B36',
      },
});
const RootForumNavigation = createStackNavigator(
  {
    Forum: {
      screen: ForumNavigation,
    },
  },
  {
    mode: 'modal',
    navigationOptions: {
      title: 'Forum',  // Title to appear in status bar
      headerTintColor: '#1A1B36',

    }
  }
)
const InterNavigation = createStackNavigator({
  Rate: {
    screen: Rate,
    navigationOptions: {
      title: 'Self-evaluation',  // Title to appear in status bar
    },
  },
  Additional: {
    screen: Additional,
    navigationOptions: {
      title: 'Self-evaluation',  // Title to appear in status bar
    },
  },
  Why: {
    screen: Why,
    navigationOptions: {
      title: 'Self-evaluation',  // Title to appear in status bar
    },
  },
  Suggestions: {
    screen: Suggestions,
    navigationOptions: {
      title: 'Self-sds',  // Title to appear in status bar
    },
  },
}, {
  navigationOptions: {
        headerTintColor: '#1A1B36',
      },
});
const RootInterNavigation = createStackNavigator(
  {
    Inter: {
      screen: InterNavigation,
    },
  },
  {
    mode: 'modal',
    navigationOptions: {
      title: 'Self-evaluation',
      headerTintColor: '#1A1B36',

    }
  }
)
export const Root = createStackNavigator ({
    Home: {
      screen: TabbarHome,
      navigationOptions: {
      },
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null,
        headerVisible: true,
        headerTintColor: '#1A1B36',
    }
  }

)
