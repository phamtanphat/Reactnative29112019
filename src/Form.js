/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {width, height} from './dimension';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEn: '',
      txtVn: '',
    };
  }
  renderForm = () => {
    const {shouldShowForm} = this.props;
    if (shouldShowForm) {
      return (
        <View>
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              borderWidth: 1,
              margin: 10,
              fontSize: 20,
              paddingHorizontal: 20,
            }}
            placeholder="English"
            value={this.state.txtEn}
            onChangeText={text => {
              this.setState({txtEn: text});
            }}
          />
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              borderWidth: 1,
              margin: 10,
              fontSize: 20,
              paddingHorizontal: 20,
            }}
            placeholder="Vietnamese"
            value={this.state.txtVn}
            onChangeText={text => {
              this.setState({txtVn: text});
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#28a745',
                padding: 15,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Add word
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                padding: 15,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            paddingVertical: width / 30,
            backgroundColor: '#28a745',
            alignItems: 'center',
            borderRadius: width / 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: width / 15,
            }}>
            +
          </Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return this.renderForm();
  }
}
