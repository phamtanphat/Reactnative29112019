/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {width, height} from './dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WordModel from './model/WordModel';
import Word from './Word';
import Filter from './Filter';


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
        {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
        {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
        {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
        {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
      ],
      shouldShowForm: false,
      txtEn: '',
      txtVn: '',
      optionSelected: 'SHOW_FORGOT',
    };
  }
  toggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  addWord = () => {
    const {txtEn, txtVn} = this.state;
    if (txtEn.length <= 0 || txtVn.length <= 0) {
      return alert('Ban chua nhap du thong tin');
    }
    const newWord = new WordModel(
      this.state.words[this.state.words.length - 1].id + 1,
      txtEn,
      txtVn,
    );
    const newListWord = this.state.words.concat(newWord);
    newListWord.sort((a, b) => a.name > b.name);
    this.setState({
      words: newListWord,
      txtEn: '',
      txtVn: '',
      shouldShowForm: !this.state.shouldShowForm,
    });
  };
  renderForm() {
    const {shouldShowForm} = this.state;
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
              onPress={() => this.addWord()}
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
              onPress={() => this.toggleForm()}
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
          onPress={() => this.toggleForm()}
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
  }
  toggleMemorized = id => {
    const words = this.state.words.map(word => {
      if (word.id === id) {
        return {...word, isMemorized: !word.isMemorized};
      }
      return word;
    });
    this.setState({words});
  };
  removeWord = id => {
    Alert.alert(
      'Do you want to remove this word ?',
      'Choose yes or no',
      [
        {
          text: 'Yes',
          onPress: () => {
            const words = this.state.words.filter(word => {
              if (word.id === id) {
                return false;
              }
              return true;
            });
            this.setState({words});
          },
        },
        {text: 'No', style: 'cancel'},
      ],
      {cancelable: false},
    );
  };
  render() {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <View style={{flex: 1, paddingTop: width / 50}}>
          {this.renderForm()}
          <Filter optionSelected={this.state.optionSelected} />
          <Word
            words={this.state.words}
            optionSelected={this.state.optionSelected}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
