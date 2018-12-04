import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };
  constructor(props) {
    super(props);

    this.state = {
      response: null,
      temp: null,
      humidity: null,
    };
  }

  componentDidMount() {
    fetch('https://fcc-weather-api.glitch.me/api/current?lat=52.364865&lon=4.887926')
      .then(response => response.json())
      .then(results => this.setState({
        response: results,
        temp: results.main.temp,
        humidity: results.main.humidity,
      }));
  }

  render() {
    const response = this.state.response;
    const temp = this.state.temp;
    const humidity = this.state.humidity;
    const isLoading = !response && !temp && !humidity;
    if (response && temp && humidity) {
      console.log(response.main);
      console.log(temp);
      console.log(humidity);
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.mainContainer}>
          <View className="container">
            <View className="header">
              <Text>Your Advice</Text>
            </View>
            <View className="content">
              <Text className="data-content">
                {isLoading ? 'loading.....' : response.main.temp}°C &nbsp;
                        / &nbsp; {isLoading ? 'loading.....' : response.name} &nbsp;
                        / &nbsp; {isLoading ? 'loading.....' : response.main.humidity}%
                        </Text>
              <Text>Shirt: {
                (temp >= 15) ? 'Wear a T-shirt' :
                  (temp <= 15) ? 'You  need a long shirt or a sweater' :
                    (temp <= 5) ? 'You need a thick sweater' :
                      'Might not want to bother going outside'
              }</Text>
              <Text>Jacket: {
                (temp >= 20) ? 'Leave your jackets at home!' :
                  (temp >= 15) ? 'Bring a summer jacket' :
                    (temp <= 8) ? 'Wear a winter jacket' :
                      (temp <= 15) ? 'You need your jacket' :
                        'Might not want to bother going outside'
              }</Text>
              <Text>Jeans: {
                (temp <= 5) ? 'You need pretty warm pants' :
                  (temp <= 20) ? 'Wear long jeans' :
                    (temp >= 20) ? 'Wear shorts' :
                      'Might not want to bother going outside'
              }</Text>
              <Text>Shoes: {
                (temp <= 5) ? 'Wear some warm shoes' :
                  (temp <= 15) ? 'Wear closed shoes' :
                    (temp <= 20) ? 'Wear some breatheable sneakers' :
                      (temp >= 20) ? 'You can wear open slippers or breatheeable sneakers' :
                        'Might not want to bother going outside'
              }</Text>
              <Text>Umbrella: {
                (humidity >= 95) ? 'Bring an umbrella!' :
                  (humidity >= 85) ? 'There is a chance you need an umbrella' :
                    (humidity >= 50) ? 'There is  a small chance for rain' :
                      'Leave your umbrella at home, enjoy the weather'
              }
              </Text>
            </View>
            <View className="footer">
              <Button title="Press Me">Try it out!</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  mainContainer: {
    alignItems: 'center'
  },
});
