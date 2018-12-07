import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image

} from 'react-native';

export default class AdviceScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Advice',
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
  constructor(props) {
    super(props);

    this.state = {
      response: null,
      temp: null,
      weather: null,
    };

    this.fetchForecast = this.fetchForecast.bind(this);
  }

  componentDidMount() {
    this.fetchForecast();
  }

  fetchForecast() {
    this.setState({
      response: null,
      temp: null,
      weather: null,
    });

    return fetch('https://api.darksky.net/forecast/1d7929e1a57a9df90f4c5f039fd66fdc/52.364865,4.887926?units=si')
      .then(response => response.json())
      .then(results => this.setState({
        response: results,
        summary: results.hourly.summary,
        temp: results.currently.temperature,
        weather: results.hourly.icon,
      }));
  }

  render() {
    const response = this.state.response;
    const temp = this.state.temp;
    const weather = this.state.icon;
    const isLoading = !response && !temp && !weather;
    if (response && temp && weather) {
      console.log(temp);
      console.log(weather);
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Advice</Text>
        </View>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <Text style={styles.text}>
            On this page your advise on what clothes to wear is being shown. The advice is based on the weather forecast at Peakfijn:
          </Text>
          <Text style={styles.textOrange}>
            {isLoading ? 'loading.....' : response.hourly.summary} {"\n"}{"\n"}
          </Text>
          <View>
            <Text style={styles.text}>Shirt: {
              (temp >= 15) ? 'Wear a T-shirt' :
                (temp <= 15) ? 'You need a long shirt or a sweater' :
                  (temp <= 5) ? 'You need a thick sweater' :
                    'Might not want to bother going outside'
            }</Text>
            <Text style={styles.text}>Jacket: {
              (temp >= 20) ? 'Leave your jackets at home!' :
                (temp >= 15) ? 'Bring a summer jacket' :
                  (temp <= 8) ? 'Wear a winter jacket' :
                    (temp <= 15) ? 'You need your jacket' :
                      'Might not want to bother going outside'
            }</Text>
            <Text style={styles.text}>Jeans: {
              (temp <= 5) ? 'You need pretty warm pants' :
                (temp <= 20) ? 'Wear long jeans' :
                  (temp >= 20) ? 'Wear shorts' :
                    'Might not want to bother going outside'
            }</Text>
            <Text style={styles.text}>Shoes: {
              (temp <= 5) ? 'Wear some warm shoes' :
                (temp <= 15) ? 'Wear closed shoes' :
                  (temp <= 20) ? 'Wear some breatheable sneakers' :
                    (temp >= 20) ? 'You can wear open slippers or breatheeable sneakers' :
                      'Might not want to bother going outside'
            }</Text>
            <Text style={styles.text}>Umbrella: {
              (weather === 'rain' || 'snow' || 'hail' || 'thunderstorm' ) ? 'You should bring an umbrella' :
                    'Leave your umbrella at home, enjoy the weather'
            }
            </Text>
          </View>
          <View>
            <Text>
              <Text style={styles.textLocation}>Peakfijn forecast: </Text>
              <Text style={styles.text}>
                {isLoading ? 'loading.....' : Math.round(response.currently.temperature)}°C &nbsp;
                 </Text>
              <Text style={styles.textForecast}>
                / &nbsp; {isLoading ? 'loading.....' : response.hourly.icon}
              </Text>
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            color='#FF4D18'
            title="Refresh"
            onPress={
              this.fetchForecast
            }>
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
  textForecast: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  textOrange: {
    color: '#FF4D18',
    fontSize: 16,
  },
  textLocation: {
    color: '#FF4D18',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

});
