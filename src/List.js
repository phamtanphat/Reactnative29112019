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
import Form from './Form';

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
      optionSelected: 'SHOW_ALL',
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
          <Form shouldShowForm={this.state.shouldShowForm} />
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
