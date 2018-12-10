import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Coordinates from './Coordinates';

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
      fontSize: 22,
      flex: 1,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Information</Text>
        </View>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <View>
            <Text style={styles.text}>The Clothes Advisor is an application that advices you which clothes to wear in the current weather. Imagine you want to go outside and wondering what to wear. One press on a button and the application gives an advice on what to wear. </Text>
            <Text style={styles.textOrange}>Try it out at advice below!</Text>
            <Coordinates />
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
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginLeft: '5%',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  textOrange: {
    color: '#FF4D18',
    fontSize: 16,
  },
});
