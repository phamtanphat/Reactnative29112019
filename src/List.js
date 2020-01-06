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
import {Dropdown} from 'react-native-material-dropdown';

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
      optionWord: [
        {value: 'SHOW_ALL'},
        {value: 'SHOW_FORGOT'},
        {value: 'SHOW_MEMORIZED'},
      ],
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
  renderItemView = item => {
    const {en, id, vn, isMemorized} = item;
    const {optionSelected} = this.state;
    if (optionSelected === 'SHOW_FORGOT' && !item.isMemorized) {
      return null;
    }
    if (optionSelected === 'SHOW_MEMORIZED' && item.isMemorized) {
      return null;
    }
    return (
      <View
        style={{
          marginBottom: width / 20,
          borderRadius: 5,
          backgroundColor: 'lightgrey',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{fontSize: width / 13, color: '#27A745'}}>{en}</Text>
          <Text style={{fontSize: width / 13, color: '#DC3545'}}>
            {isMemorized ? '----' : vn}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: width / 80,
            marginBottom: width / 30,
          }}>
          <TouchableOpacity
            onPress={() => this.toggleMemorized(id)}
            style={{
              backgroundColor: isMemorized ? '#208837' : '#C82233',
              paddingHorizontal: width / 15,
              paddingVertical: width / 40,
            }}>
            <Text style={{color: 'white', fontSize: width / 20}}>
              {isMemorized ? 'Forgot' : 'isMemorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.removeWord(id)}
            style={{
              backgroundColor: '#e0a800',
              paddingHorizontal: width / 15,
              paddingVertical: width / 40,
            }}>
            <Text style={{color: 'black', fontSize: width / 20}}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <View style={{flex: 1, paddingTop: width / 50}}>
          {this.renderForm()}
          <Dropdown
            data={this.state.optionWord}
            containerStyle={{
              top: width * 0.01,
              width: width * 0.9,
              height: width * 0.1,
              borderRadius: 5,
              borderWidth: 1,
              paddingLeft: width * 0.02,
            }}
            inputContainerStyle={{borderBottomColor: 'transparent'}}
            dropdownOffset={{top: width * 0.01, left: 0}}
            value={this.state.optionSelected}
            onChangeText={text => {
              this.setState({optionSelected: text});
            }}
          />
          <FlatList
            ref={ref => {
              this.flatList = ref;
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{marginTop: width / 50}}
            data={this.state.words}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => this.renderItemView(item)}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
