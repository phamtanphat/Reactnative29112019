/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {width} from './dimension';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {connect} from 'react-redux';
import FilterController from './Controller/FilterControl';
import FormController from './Controller/FormController';
import WordController from './Controller/WordController';

class List extends Component {
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
