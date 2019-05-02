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
    headerTitle: 'Debt Balance',
    headerStyle: {
      textAlign: 'left',
      backgroundColor: '#a40000',
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
            <Text style={styles.textBold}>Welcome! {"\n"}</Text>
            <Text style={styles.text}>The goal of Endava is to give you, the user, insight in your expenses. We believe that you don’t learn much by just filling in numbers but really thinking about what you spend your money on.{"\n"}{"\n"}So start thinking in solutions and start saving money today! </Text>
          </View>
        </ScrollView>
        <Text style={styles.disclaimer}>
          <Text style={{ fontWeight: 'bold' }}>Disclaimer: </Text>
          <Text>Debt Balance is not an guaranteed solution for financial independence</Text>
        </Text>
        <View style={styles.footer}>
          <Button
            color='#ff7448'
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
    backgroundColor: '#f5f5f5',
  },
  mainContainer: {
    alignItems: 'center',
    margin: '5%',
  },

  disclaimer: {
    fontSize: 11,
    margin: '5%',
    color: '#00000090'
  },

  text: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 30,
  },
  textBold: {
    color: '#000000',
    fontSize: 28,
    // justifyContent: 'center',
    fontWeight: 'bold',
  },
  footer: {
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
