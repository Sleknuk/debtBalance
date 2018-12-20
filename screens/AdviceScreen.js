import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  ActivityIndicator

} from 'react-native';
import { Constants, Location, Permissions } from 'expo';


export default class AdviceScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Advice',
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
      response: null,
      temp: null,
      weather: null,
      background: null,
      errorMessage: null,
      location: null,
    };
    this.fetchForecast = this.fetchForecast.bind(this);
  }

  componentDidMount() {
    this.fetchForecast();
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      location
    });
  }

  fetchForecast() {
    this.setState({
      response: null,
      temp: null,
      weather: null,
    });
    this._getLocationAsync().then(() => {
      const lat = this.state.location.coords.latitude;
      const lon = this.state.location.coords.longitude;
      return fetch(`https://api.darksky.net/forecast/1d7929e1a57a9df90f4c5f039fd66fdc/${lat},${lon}?units=si`)
        .then(response => response.json())
        .then(results => this.setState({
          response: results,
          summary: results.hourly.summary,
          temp: results.currently.temperature,
          weather: results.hourly.icon,
          background: results.currently.precipType,
        }, () => {
          console.log('state')
        }));
    });
  }

  render() {
    const response = this.state.response;
    const temp = this.state.temp;
    const weather = this.state.icon;
    const background = this.state.background;
    const isLoading = !response && !temp && !weather;
    if (response && temp && weather) {
      console.log(temp);
      console.log(weather);
    }
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            flex: 1,
            resizeMode: 'cover',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
          source={isLoading ? require('../assets/backgrounds/background.png') :
            (background == 'rain') ? require('../assets/backgrounds/rainDark.png') :
              (background == 'snow') ? require('../assets/backgrounds/snowDark.png') :
                (background == 'sleet') ? require('../assets/backgrounds/sleetDark.png') :
                  (background == null) ? require('../assets/backgrounds/clearDark.png') :
                    console.log('error')

          }
        >
          <ScrollView contentContainerStyle={styles.mainContainer}>
            <Text style={styles.text}>
              On this page your advice on what clothes to wear is being shown. The advice is based on the weather forecast of the upcoming 24 hours:
              {"\n"}
            </Text>
            <View>
              {isLoading ?
                <ActivityIndicator
                  color="#FF4D18"
                  size='large'
                /> : <View>
                  <Text style={styles.textOrange}>
                    {response.hourly.summary} {"\n"}{"\n"}
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
                      (response.daily.data[0].precipProbability >= 0.50) ? 'You should bring an umbrella' :
                        "You won't need it"
                    }
                    </Text>
                  </View>
                  <View style={styles.textData}>
                    <Text>
                      <Text style={styles.textLocation}>Temperature / Precipitate</Text>
                    </Text>
                    <Text>
                    <Text style={styles.textData}>
                        {Math.round(response.currently.temperature)}°C &nbsp;
                      </Text>
                      <Text style={styles.textData}>
                        /&nbsp; {Math.round(response.daily.data[0].precipProbability * 100)}%
                      </Text>
                    </Text>
                  </View>
                </View>
              }

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
        </ImageBackground>
      </View>

    );
  }
}

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
