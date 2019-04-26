import React, { Component } from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import InputScreen from '../screens/InputScreen';


export default createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarColor: '#842655',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-home' : 'ios-home-outline') : 'md-home'} style={{ color: tintColor }} />
                )
            }
        },
        Settings: {
            screen: InputScreen
        ,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarColor: '#ff3838',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon size={25} name={Platform.OS === 'ios' ? (focused ? 'ios-settings' : 'ios-settings-outline') : 'md-settings'} style={{ color: tintColor }} />
                )
            }
        }
    },
    {
        shifting: true,
        activeTintColor: 'white',
        inactiveTintColor: '#ddd',
    }
);