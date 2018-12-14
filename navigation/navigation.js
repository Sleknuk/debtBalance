import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// Navigators
import { createBottomTabNavigator } from 'react-navigation'

// import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AdviceScreen from '../screens/AdviceScreen';
// import colors from '../constants/Colors';

export default createBottomTabNavigator({
    HomeScreen,
    AdviceScreen
},
    {
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: 'blue',
            },
        }
    })