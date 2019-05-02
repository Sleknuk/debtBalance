// COLORS ENDAVA: de411b AND 64666d
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
  Button,
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';



const DARK_GRAY = "#D3D3D3";
const LIGHT_GRAY = "#D3D3D3";

export default class Input extends Component {
  static navigationOptions = {
    title: 'Input Screen',
    headerStyle: {
      backgroundColor: '#a40000',
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
      result: 0,
      income: 0,
      expences: 0,
      expence2: 0,
      expence3: 0,
      expence4: 0,
      expence5: 0,
      other: 0,
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
    else if (field == 'other') {
      this.setState({ other: Number.parseFloat(numeric) });
    }

  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding" enabled
        keyboardVerticalOffset='85'>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <View style={{ backgroundColor: '#f0f0f0' }}>
            <Text style={styles.text}>Start by filling your income/expenses per month below and press 'Show Results' whenever you are ready:</Text>
            <TextInput
              selectionColor={DARK_GRAY}
              underlineColorAndroid={
                isFocused ? DARK_GRAY : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              placeholder='Total Income'
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
              placeholder='Total insurance (Car, House, Health…)'
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
              placeholder='Car costs'
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
              placeholder='Rent'
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
              placeholder='Food'
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
              placeholder='Debt payment(s)'
              keyboardType={"numeric"}
              maxLength={8}
              style={styles.input}
              onChangeText={(numeric) => this.updateValue(numeric, 'expence5')}
            />
            <TextInput
              selectionColor={DARK_GRAY}
              underlineColorAndroid={
                isFocused ? DARK_GRAY : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              placeholder='Other expense(s)'
              keyboardType={"numeric"}
              maxLength={8}
              style={styles.input}
              onChangeText={(numeric) => this.updateValue(numeric, 'other')}
            />
          </View>
          <View style={{ height: 60, }}></View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({
                modalVisible: false,
              })
            }}>
            <View style={{
              backgroundColor: '#00000080',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={{
                backgroundColor: '#fff',
                padding: 20,
                width: '70%',
                height: '50%',
                borderRadius: 8,
              }}>
                <ScrollView>
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
                      this.state.expence5 +
                      this.state.other)}
                    </Text>
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.space}>
                    <Text style={{ fontWeight: 'bold' }}>Money to invest: </Text>
                    <Text style={{ fontWeight: 'bold' }}>{(
                      this.state.income) - (
                        this.state.expences +
                        this.state.expence2 +
                        this.state.expence3 +
                        this.state.expence4 +
                        this.state.expence5 +
                        this.state.other)
                      + "\n" + "\n"}
                    </Text>
                  </View>
                </ScrollView>
                <View>
                  <TouchableHighlight
                    style={styles.closeButton}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={{ fontWeight: 'bold', color: '#FFFFFF' }}> CLOSE </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal >
        </ScrollView>
        <View style={styles.footer}>
          <Button
            color='#ff7448'
            title="Show Results"
            onPress={() => {
              this.setModalVisible(true);
            }}>>
        </Button>
        </View>
      </KeyboardAvoidingView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  text: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 30,
    backgroundColor: '#f5f5f5',
  },

  mainContainer: {
    margin: '5%',
  },

  line: {
    height: 2,
    borderRadius: 2,
    width: '100%',
    backgroundColor: '#000000',
    marginBottom: 10,
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

  input: {
    height: 50,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingLeft: 10,
  },

  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 20,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#ff7448',
  },

  footer: {
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});