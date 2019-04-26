import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import text from "../screens/InputScreen"

export default class InputScreen extends React.Component {
    static navigationOptions = {
      title: 'Input Screen',
      headerStyle: {
        backgroundColor: '#37474f',
        height: 60,
      },
      headerTintColor: 'white',
      justifyAllignment: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
      },
      headerLeft:
        (<View style={{ paddingLeft: 15 }}><Image style={{ width: 45, height: 45, flex: 1 }} resizeMode="contain" source={require('../assets/images/icon.png')} /></View>)
    };
    constructor(props) {
      super(props);
  
      this.state = {
        text: '',
      };
    }
  
    render() {
  
      return (
        <View>
            <Text>{text}</Text>
        </View>
      );
    }
  }
  
  // skip these lines if using Create React Native App
  AppRegistry.registerComponent(
    'AwesomeProject',
    () => UselessTextInputMultiline
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    mainContainer: {
      paddingTop: 15,
      alignItems: 'center',
      margin: '5%',
    },
    text: {
      color: '#000000',
      fontSize: 20,
      lineHeight: 30,
    },
    textOrange: {
      color: '#661700',
      fontSize: 20,
      textAlign: 'center',
    },
    textLocation: {
      color: '#661700',
      fontSize: 20,
      textAlign: 'center',
    },
    textData: {
      color: '#000000',
      fontSize: 20,
      alignItems: 'center',
      margin: '5%',
    },
    footer: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
    },
  
  });
  