import React, { Component } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import AdviceScreen from '../screens/AdviceScreen';
import colors from '../constants/Colors';


// export default class App extends Component {
//   render(){
//     return(

//     )
//   }
// }



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarColor: '#842655',
  style: {
    backgroundColor: '#62727b',
    fontWeight: 'bold',
  },
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-information-circle' : 'ios-information-circle-outline') : 'md-information-circle'} style={{ color: tintColor }} />
  )
};

const AdviceStack = createStackNavigator({
  Advice: AdviceScreen,
});

AdviceStack.navigationOptions = {
  tabBarLabel: 'Advice',
  tabBarColor: '#ff3838',
  style: {
    backgroundColor: '#62727b',
    fontWeight: 'bold',
  },
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-umbrella' : 'ios-umbrella') : 'md-umbrella'} style={{ color: tintColor }} />
  )
};

export default createMaterialTopTabNavigator({
  HomeStack,
  AdviceStack,
},
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#FF4D18',
      inactiveTintColor: 'grey',
      labelStyles:{ fontSize: 15 },
      style: {
        backgroundColor: '#d1d1d1',

      },
      indicatorStyle: {
        height: 2,
        backgroundColor: '#FF4D18',
      },
      allowFontScaling: false,
      showIcon: true,
      shifting: true,
    },




  }
);
