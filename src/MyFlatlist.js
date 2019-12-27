/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import Monan from './model/Monan';

export default class MyFlatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMonan: [
        new Monan(1, 'Banh nam', 'Mon an mien tay', 20000,require('./asset/banhnam.jpeg')),
        new Monan(2, 'Bo kho', 'An ngon va re', 35000,require('./asset/bokho.jpg')),
        new Monan(3, 'Cha gio', 'Cha gio ngon so mot', 40000,require('./asset/chagio.jpg')),
        new Monan(4, 'Muc don thit', 'Dac san que huong', 15000,require('./asset/mucdonthit.jpg')),
        new Monan(5, 'Sup', 'Cong thuc gia truyen', 12000,require('./asset/sup.jpg')),
      ],
    };
  }
  renderItemList = (item) =>{
    return (
      <View style={{ flexDirection : 'row'}}>
          <Image source={item.image} style={{width : 120 , height : 100}}/>
          <View style={{flexDirection : 'column' , justifyContent : 'space-around'}}>
            <Text style={{color : 'red' , fontSize : 20 , fontWeight : 'bold'}}>{item.name}</Text>
            <Text style={{color : 'blue' , fontSize : 15 }}>{item.description}</Text>
            <Text style={{color : 'black' , fontSize : 15 }}>{item.price} VND</Text>
          </View>
      </View>
    );
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.listMonan}
          extraData={this.state}
          keyExtractor={(item,index) => item.id + ''}
          renderItem={({item,index}) => this.renderItemList(item)}
        />
      </View>
    );
  }
}
