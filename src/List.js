/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {width} from './dimension';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {connect} from 'react-redux';
import FilterController from './Controller/FilterControl';
import FormController from './Controller/FormController';
import WordController from './Controller/WordController';
import Response from './model/Reponse';

class List extends Component {
  componentDidMount() {
    fetch('https://server2301.herokuapp.com/word', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        const response = new Response(data.success, data.words);
        console.log(response.success);
      });
  }
  render() {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <View style={{flex: 1, paddingTop: width / 50}}>
          <FormController />
          <FilterController />
          <WordController />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default connect()(List);
