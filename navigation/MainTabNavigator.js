import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AdviceScreen from '../screens/AdviceScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    activeTintColor: '#FF4D18',
    inactiveTintColor: '#515151',
    style: {
      backgroundColor: '#000000',
      borderTopWidth: 1,
      borderTopColor:'#f7f7f7',      
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const AdviceStack = createStackNavigator({
  Advice: AdviceScreen,
});

AdviceStack.navigationOptions = {
  tabBarLabel: 'Advice',
  tabBarOptions: {
    activeTintColor: '#FF4D18',
    inactiveTintColor: '#515151',
    style: {
      backgroundColor: '#000000',
      borderTopWidth: 1,
      borderTopColor:'#f7f7f7',
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-umbrella'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AdviceStack,
});
