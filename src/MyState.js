/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class MyState extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'red', fontSize: 40}}>
          Count : {this.props.count}
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity style={{backgroundColor: 'green', padding: 10}}>
            <Text
              style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
              Increase
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'red', padding: 10}}>
            <Text
              style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
              Decrease
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'slategray', padding: 10}}>
            <Text
              style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
