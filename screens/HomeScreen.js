import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import AdviceScreen from '../screens/AdviceScreen';
import { createStackNavigator} from 'react-navigation';

createStackNavigator(
  {
    Advice: AdviceScreen,
  }
);


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  navigatie(){
    AdviceStack
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Peakfijn Clothes Advisor</Text>
        </View>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <View>
            <Text style={styles.text}>The Clothes Advisor is an application that advices you which clothes to wear in the current weather. Imagine you want to go outside and wondering what to wear. One press on a button and the application gives an advice on what to wear. {"\n"}</Text>
            <Text style={styles.textBold}>Try it out below!</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
        <Button
            color='#FF4D18'
            title="Try it out"
            onPress={() => this.props.navigation.navigate('Advice')}>
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
    backgroundColor: '#331d00',
  },
  mainContainer: {
    alignItems: 'center',
    margin: '5%',
  },
  title: {
    textAlign: 'center',
    paddingTop: 25,
    fontWeight: 'bold',
    fontSize: 26,
    color: '#FF4D18',
  },
  text: {
    color: '#f7f7f7',
    fontSize: 16,
  },
  textBold: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  footer: {
    borderRadius: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
