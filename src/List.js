/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {width, height} from './dimension';

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
    };
  }
  renderItemView = item => {
    const {en, id, vn, isMemorized} = item;
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
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: width / 50}}
          data={this.state.words}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => this.renderItemView(item)}
        />
      </View>
    );
  }
}
