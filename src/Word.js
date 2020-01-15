/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import {width, height} from './dimension';
import {connect} from 'react-redux';
import * as actionCreator from './redux/action/actionCreator';

class Word extends Component {
  onRemoveWord = id => {
    Alert.alert(
      'Do you want to remove this word ?',
      'Choose yes or no',
      [
        {
          text: 'Yes',
          onPress: () => {
            this.props.removeWord(id);
          },
        },
        {text: 'No', style: 'cancel'},
      ],
      {cancelable: false},
    );
  };
  renderItemView = item => {
    const {en, id, vn, isMemorized} = item;
    const {filterMode} = this.props;
    if (filterMode === 'SHOW_FORGOT' && !item.isMemorized) {
      return null;
    }
    if (filterMode === 'SHOW_MEMORIZED' && item.isMemorized) {
      return null;
    }
    return (
      <View
        style={{
          marginBottom: width / 20,
          borderRadius: 5,
          backgroundColor: 'lightgrey',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{fontSize: width / 13, color: '#27A745'}}>{en}</Text>
          <Text style={{fontSize: width / 13, color: '#DC3545'}}>
            {isMemorized ? '----' : vn}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: width / 80,
            marginBottom: width / 30,
          }}>
          <TouchableOpacity
            onPress={() => this.props.toggleWord(id)}
            style={{
              backgroundColor: isMemorized ? '#208837' : '#C82233',
              paddingHorizontal: width / 15,
              paddingVertical: width / 40,
            }}>
            <Text style={{color: 'white', fontSize: width / 20}}>
              {isMemorized ? 'Forgot' : 'isMemorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onRemoveWord(id)}
            style={{
              backgroundColor: '#e0a800',
              paddingHorizontal: width / 15,
              paddingVertical: width / 40,
            }}>
            <Text style={{color: 'black', fontSize: width / 20}}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return (
      <FlatList
        ref={ref => {
          this.flatList = ref;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: width / 50}}
        data={this.props.words}
        extraData={this.props.words}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => this.renderItemView(item)}
      />
    );
  }
}
const mapStateToProps = state => {
  return {words: state.words, filterMode: state.filterMode};
};
const mapDispatchToProps = disptach => {
  return {
    toggleWord: id => disptach(actionCreator.toggleMemorized(id)),
    removeWord: id => disptach(actionCreator.removeWord(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Word);
