import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import { Button } from 'react-native-elements';

const Income = (props) => (
  <TextInput defaultValue={props.income} onChangeText={props.onTextChange} />
);

const expence2 = (props) => (
  <TextInput defaultValue={props.income2} onChangeText={props.onTextChange} />
);

const IncomeDisplay = (props) => (
  <Text style={{ color: 'red' }}>{props.income}</Text>
);

const DARK_GRAY = "#D3D3D3";
const LIGHT_GRAY = "#D3D3D3";

export default class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      income: 0,
      expences: 0,
      expence2: 0,
      expence3: 0,
      expence4: 0,
      expence5: 0,
      isFocused: false,
      modalVisible: false,
    }
  }

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
      this.setState({
        isFocused: false,
      })
    }
  };


  updateValue(numeric, field) {
    if (field == 'income') {
      this.setState({ income: Number.parseFloat(numeric) });
    }
    else if (field == 'expences') {
      this.setState({ expences: Number.parseFloat(numeric) });
    }
    else if (field == 'expence2') {
      this.setState({ expence2: Number.parseFloat(numeric) });
    }
    else if (field == 'expence3') {
      this.setState({ expence3: Number.parseFloat(numeric) });
    }
    else if (field == 'expence4') {
      this.setState({ expence4: Number.parseFloat(numeric) });
    }
    else if (field == 'expence5') {
      this.setState({ expence5: Number.parseFloat(numeric) });
    }

  }

  addAction = (event) => {
    let x = this.state.expence5 + this.state.expence4;
    this.setState({ result: x })
    console.log(x);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;
    console.log(12 + 3)
    return (
      <View style={styles.container}>
        <TextInput
          selectionColor={DARK_GRAY}
          underlineColorAndroid={
            isFocused ? DARK_GRAY : LIGHT_GRAY
          }
          onFocus={this.handleFocus}
          placeholder='income'
          keyboardType={"numeric"}
          maxLength={8}
          style={styles.input}
          onChangeText={(numeric) => this.updateValue(numeric, 'income')}
        />
        <TextInput
          selectionColor={DARK_GRAY}
          underlineColorAndroid={
            isFocused ? DARK_GRAY : LIGHT_GRAY
          }
          onFocus={this.handleFocus}
          placeholder='expences'
          keyboardType={"numeric"}
          maxLength={8}
          style={styles.input}
          onChangeText={(numeric) => this.updateValue(numeric, 'expences')}
        />
        <TextInput
          selectionColor={DARK_GRAY}
          underlineColorAndroid={
            isFocused ? DARK_GRAY : LIGHT_GRAY
          }
          onFocus={this.handleFocus}
          placeholder='expence2'
          keyboardType={"numeric"}
          maxLength={8}
          style={styles.input}
          onChangeText={(numeric) => this.updateValue(numeric, 'expence2')}
        />
        <TextInput
          selectionColor={DARK_GRAY}
          underlineColorAndroid={
            isFocused ? DARK_GRAY : LIGHT_GRAY
          }
          onFocus={this.handleFocus}
          placeholder='expence3'
          keyboardType={"numeric"}
          maxLength={8}
          style={styles.input}
          onChangeText={(numeric) => this.updateValue(numeric, 'expence3')}
        />
        <TextInput
          selectionColor={DARK_GRAY}
          underlineColorAndroid={
            isFocused ? DARK_GRAY : LIGHT_GRAY
          }
          onFocus={this.handleFocus}
          placeholder='expence4'
          keyboardType={"numeric"}
          maxLength={8}
          style={styles.input}
          onChangeText={(numeric) => this.updateValue(numeric, 'expence4')}
        />
        <TextInput
          selectionColor={DARK_GRAY}
          underlineColorAndroid={
            isFocused ? DARK_GRAY : LIGHT_GRAY
          }
          onFocus={this.handleFocus}
          placeholder='expence5'
          keyboardType={"numeric"}
          maxLength={8}
          style={styles.input}
          onChangeText={(numeric) => this.updateValue(numeric, 'expence5')}
        />

        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <View style={styles.space}>
                <Text>Total income: </Text>
                <Text>{this.state.income}</Text>
              </View>
              <View style={styles.space}>
                <Text>Total expences: </Text>
                <Text>{(
                  this.state.expences +
                  this.state.expence2 +
                  this.state.expence3 +
                  this.state.expence4 +
                  this.state.expence5)}
                </Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.space}>
              <Text>Money to spend per month: </Text>
              <Text>{(
                this.state.income) - (
                  this.state.expences +
                  this.state.expence2 +
                  this.state.expence3 +
                  this.state.expence4 +
                  this.state.expence5)}
              </Text>
              </View>
            </View>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal >
      <Button
        color='#FF4D18'
        title="Try it out"
        onPress={() => {
          this.setModalVisible(true);
        }}>>

        </Button>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',

  },

  line: {
    height: 2,
    borderRadius: 2,
    width: '100%',
    backgroundColor: '#000000',
  },

  space: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  containerBlue: {
    backgroundColor: 'blue',
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',

  },

  button: {
    width: '100%',
    height: 40,
    borderRadius: 2,
    backgroundColor: 'red',
  },

  input: {
    width: '100%',
    height: 50,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingLeft: 6,
  },
});






  // submitFunction() {
  //   let collection = {}
  //   collection.income = this.state.income,
  //     collection.expences = this.state.expences
  //   console.warn(collection.income - collection.expences);
  // }





// <TouchableOpacity
// onPress={() => this.submitFunction()}
// style={styles.button}>
// <Text>Submit</Text>
// </TouchableOpacity>

// <View>
// <IncomeDisplay income={this.state.income} />
// <Income income={this.state.income} onTextChange={income => this.setState({ income })} />
// </View>





























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
//   textDARK_GRAY: {
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
//     paddingLeft: 5,
//     paddingRight: 5,
//   },

// });
