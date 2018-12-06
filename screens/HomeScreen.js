import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Peakfijn Clothes Advisor',
    headerStyle: {
      backgroundColor: '#FF4D18',
    },
    headerTintColor: 'white',
    justifyAllignment: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
      flex: 1,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>HomePage</Text>
        </View>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'black',
  },
  mainContainer: {
    alignItems: 'center',
    margin: '5%',
  },
  text: {
    color: 'white'
  },
  textOrange: {
    color: '#FF4D18',
  },
});
