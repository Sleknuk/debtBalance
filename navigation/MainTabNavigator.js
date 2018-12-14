import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AdviceScreen from '../screens/AdviceScreen';
import colors from '../constants/Colors';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#5b6972',
    inactiveTintColor: '#777777',
    style: {
      backgroundColor: '#4f5b62',
    },
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
    activeTintColor: 'white',
    activeBackgroundColor: '#5b6972',
    inactiveTintColor: '#777777',
    style: {
      backgroundColor: '#4f5b62',
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
