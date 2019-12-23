/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Word extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          backgroundColor: 'lightgrey',
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 30, color: '#27A745'}}> One </Text>
        <Text style={{fontSize: 30, color: '#DC3545'}}> Mot </Text>
      </View>
    );
  }
}
