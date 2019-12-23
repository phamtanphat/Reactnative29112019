import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class TextView extends Component {
  render() {
    const value = this.props.en;
    return (
      <View>
        <Text> {value} </Text>
      </View>
    );
  }
}
