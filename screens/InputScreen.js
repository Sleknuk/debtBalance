import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Vibration,
} from 'react-native';

class Input extends Component {

  constructor() {
    super();
    this.state = {
      income: Number,
      expences: Number
    }
  }

  updateValue(text, field) {
    if (field == 'income') {
      this.setState({
        income: text,
      })
    }
    else if (field == 'expences') {
      this.setState({
        expences: text,
      })
    }
  }

  submitFunction() {
    let collection={}
    collection.income=this.state.income,
    collection.expences=this.state.expences
    console.warn(collection);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='income'
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, 'income')}
        />
        <TextInput
          placeholder='expences'
          style={styles.input}
          onChangeText={(text) => this.updateValue(text, 'expences')}
        />

        <TouchableOpacity
          onPress={() => this.submitFunction()}
          style={styles.button}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',

  },
  input: {
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: '#d6d7da',
  },
  button: {
    backgroundColor: 'skyblue',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
}
);

export default Input









































// import React, { Component } from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   ImageBackground,
//   Image,
//   ActivityIndicator,
//   RefreshControl,
//   AppRegistry,
//   TextInput


// } from 'react-native';

// class UselessTextInput extends Component {
//   render() {
//     return (
//       <TextInput
//         {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//         editable={true}
//         keyboardType={"numeric"}
//         maxLength={8}
//       />
//     );
//   }
// }


// export default class InputScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Input Screen',
//     headerStyle: {
//       backgroundColor: '#37474f',
//       height: 60,
//     },
//     headerTintColor: 'white',
//     justifyAllignment: 'center',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//       flex: 1,
//     },
//     headerLeft:
//       (<View style={{ paddingLeft: 15 }}><Image style={{ width: 45, height: 45, flex: 1 }} resizeMode="contain" source={require('../assets/images/icon.png')} /></View>)
//   };
//   constructor(props) {
//     super(props);

//     this.state = {
//       text: '',
//     };
//   }

//   render() {

//     return (
//       <View>

//         <View style={{
//           backgroundColor: this.state.text,
//           borderBottomColor: '#000000',
//           borderBottomWidth: 1
//         }}
//         >
//           <UselessTextInput
//             multiline={true}
//             numberOfLines={4}
//             placeholder="Type here to translate!"
//             onChangeText={(text) => this.setState({ text })}
//             value={this.state.text}
//           />
//         </View>
//         <Text>{this.state.text}</Text>
//       </View>
//     );
//   }
// }

// // skip these lines if using Create React Native App
// AppRegistry.registerComponent(
//   'AwesomeProject',
//   () => UselessTextInputMultiline
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   mainContainer: {
//     paddingTop: 15,
//     alignItems: 'center',
//     margin: '5%',
//   },
//   text: {
//     color: '#000000',
//     fontSize: 20,
//     lineHeight: 30,
//   },
//   textOrange: {
//     color: '#661700',
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   textLocation: {
//     color: '#661700',
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   textData: {
//     color: '#000000',
//     fontSize: 20,
//     alignItems: 'center',
//     margin: '5%',
//   },
//   footer: {
//     paddingTop: 5,
//     paddingBottom: 5,
//     paddingLeft: 10,
//     paddingRight: 10,
//   },

// });
