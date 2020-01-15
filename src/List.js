/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {width} from './dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Word from './Word';

import Form from './Form';
import {connect} from 'react-redux';
import FilterController from './Controller/FilterControl';

class List extends Component {
  render() {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <View style={{flex: 1, paddingTop: width / 50}}>
          <Form />
          <FilterController />
          <Word />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default connect()(List);
