/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <View style={{backgroundColor: 'green', padding: 5, borderRadius: 5}}>
            <Text style={{color: 'white', fontSize: 20}}>INCREASE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{backgroundColor: 'red', padding: 5, borderRadius: 5}}>
            <Text style={{color: 'white', fontSize: 20}}>DECREASE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{backgroundColor: 'orange', padding: 5, borderRadius: 5}}>
            <Text style={{color: 'white', fontSize: 20}}>RESET</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
