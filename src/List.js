/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {width} from './dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Word from './Word';
import Filter from './Filter';
import Form from './Form';
import {connect} from 'react-redux';

class List extends Component {

  render() {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <View style={{flex: 1, paddingTop: width / 50}}>
          <Form />
          <Filter />
          <Word />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default connect()(List);
