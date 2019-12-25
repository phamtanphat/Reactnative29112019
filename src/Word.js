/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {width, height} from './dimension';

export default class Word extends Component {
  render() {
    const {en, vn, isMemorized} = this.props.word;
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
  }
}
