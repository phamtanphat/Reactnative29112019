import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import Monan from './model/Monan';

export default class MyFlatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMonan: [
        new Monan(1, 'Banh nam', 'Mon an mien tay', 20000),
        new Monan(2, 'Bo kho', 'An ngon va re', 35000),
        new Monan(3, 'Cha gio', 'Cha gio ngon so mot', 40000),
        new Monan(4, 'Muc don thit', 'Dac san que huong', 15000),
        new Monan(5, 'Sup', 'Cong thuc gia truyen', 12000),
      ],
    };
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
