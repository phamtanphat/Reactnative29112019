/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  onIncrease = () => {
    this.setState({count: this.state.count + 1});
  };
  onDecrease = () => {
    this.setState({count: this.state.count - 1});
  };
  onReset = () => {
    this.setState({count: 0});
  };
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
        <Child
          onIncrease={this.onIncrease}
          onDecrease={this.onDecrease}
          onReset={this.onReset}
        />
      </View>
    );
  }
}
