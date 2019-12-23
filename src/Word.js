/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {width , height} from './dimension';

export default class Word extends Component {
  render() {
    //Task1 : ve ra 2 button
        // +Remove : mac dinh setup ve giao dien
        // +Forgot or Memorized : isMemorized = true (Forgot va nen xanh la) nguoc lai
    // Task2 : isMemorized = true hien thi vn = ---- va nguoc lai
    const {en, vn} = this.props;
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          backgroundColor: 'lightgrey',
          justifyContent: 'space-around',
          marginBottom: width / 20,
          borderRadius: 5,
        }}>
        <Text style={{fontSize: width / 10, color: '#27A745'}}>{en}</Text>
        <Text style={{fontSize: width / 10, color: '#DC3545'}}>{vn}</Text>
      </View>
    );
  }
}
