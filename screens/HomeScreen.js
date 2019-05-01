import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import InputScreen from './InputScreen';
import { createStackNavigator } from 'react-navigation';




createStackNavigator(
  {
    Input: InputScreen,
  }
);


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Clothes Advisor',
    headerStyle: {
      textAlign: 'left',
      backgroundColor: '#37474f',
      height: 60,
      textAlign: 'left',
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

  navigatie() {
    InputStack
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <View>
            <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem {"\n"}</Text>
            <Text style={styles.textBold}>Text</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            color='#FF4D18'
            title="Try it out"
            onPress={() => this.props.navigation.navigate('Input')}>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f5f5f5',
  },
  mainContainer: {
    alignItems: 'center',
    margin: '5%',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 30,
  },
  textBold: {
    paddingTop: 15,
    color: '#000000',
    fontSize: 24,
  },
  footer: {
    borderRadius: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
