/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {width, height} from './dimension';
import {Dropdown} from 'react-native-material-dropdown';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionWord: [
        {value: 'SHOW_ALL'},
        {value: 'SHOW_FORGOT'},
        {value: 'SHOW_MEMORIZED'},
      ],
    };
  }
  render() {
    return (
      <Dropdown
        data={this.state.optionWord}
        containerStyle={{
          top: width * 0.01,
          width: width * 0.9,
          height: width * 0.1,
          borderRadius: 5,
          borderWidth: 1,
          paddingLeft: width * 0.02,
        }}
        inputContainerStyle={{borderBottomColor: 'transparent'}}
        dropdownOffset={{top: width * 0.01, left: 0}}
        value={this.props.optionSelected}
      />
    );
  }
}
