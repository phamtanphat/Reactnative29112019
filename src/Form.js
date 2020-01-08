/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {width, height} from './dimension';
import WordModel from './model/WordModel';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEn: '',
      txtVn: '',
    };
    this.addWord = this.addWord.bind(this);
  }
  addWord = () => {
    const {txtEn, txtVn} = this.state;
    if (txtEn.length <= 0 || txtVn.length <= 0) {
      return alert('Ban chua nhap du thong tin');
    }
    const newWord = new WordModel(this.props.currentId + 1, txtEn, txtVn);
    this.props.onAddWord(newWord);
    this.setState({
      txtEn: '',
      txtVn: '',
    });
  };

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
              onPress={this.addWord}
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
              onPress={this.props.onToggleForm}
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
          onPress={this.props.onToggleForm}
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
