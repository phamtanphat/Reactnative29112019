/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  //   state = {
  //     count: 0,
  //   };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, color: 'red'}}>
          Value = {this.state.count}
        </Text>
        {/* <TouchableOpacity
          onPress={() => this.setState({count: this.state.count + 1})}>
          <Text>Plus</Text>
        </TouchableOpacity> */}
        <Child />
      </View>
    );
  }
}
