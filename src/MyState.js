/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class MyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increase() {
    this.setState({count: this.state.count + 1});
  }
  decrease() {
    this.setState({count: this.state.count - 1});
  }
  reset() {
    this.setState({count: 0});
  }
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
          Count : {this.state.count}
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => this.increase()}
            style={{backgroundColor: 'green', padding: 10}}>
            <Text
              style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
              Increase
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.decrease()}
            style={{backgroundColor: 'red', padding: 10}}>
            <Text
              style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
              Decrease
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.reset()}
            style={{backgroundColor: 'slategray', padding: 10}}>
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
