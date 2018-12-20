import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import AdviceScreen from '../screens/AdviceScreen';
import { createStackNavigator } from 'react-navigation';

createStackNavigator(
  {
    Advice: AdviceScreen,
  }
);


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Clothes Advisor',
    headerStyle: {
      textAlign : 'left',
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
    AdviceStack
  }

  render() {
    return (
      <View style={styles.container}>
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
    backgroundColor: '#ffffff',
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
