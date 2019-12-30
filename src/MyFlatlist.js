/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity,KeyboardAvoidingView, TextInput} from 'react-native';
import Monan from './model/Monan';
import {width , height} from './dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
      shouldShowForm: false,
    };
  }
  renderItemList = (item) =>{
    return (
      <TouchableOpacity
        onPress={() => {
          const newArray = this.state.listMonan.filter( monan => {
            return monan.id != item.id;
          });
          this.setState({listMonan : newArray});
        }}
      >
        <View style={{flex: 1, flexDirection : 'row', marginVertical: 5}}>
          <Image
            source={item.image}
            style={{width : 120 , height : 100}}/>
          <View
            style={{flexDirection : 'column' , justifyContent : 'space-around'}}>
            <Text
              style={{color : 'red' , fontSize : 20 , fontWeight : 'bold'}}>
              {item.name}
            </Text>
            <Text
              style={{color : 'blue' , fontSize : 15 }}>
              {item.description}
            </Text>
            <Text
              style={{color : 'black' , fontSize : 15 }}>
              {item.price} VND
            </Text>
          </View>
      </View>
      </TouchableOpacity>
    );
  }
  toggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  }
  renderForm() {
    const {shouldShowForm} = this.state;
    if (shouldShowForm) {
      return (
        <View >
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              borderWidth: 1,
              margin: 10,
              fontSize: 20,
              paddingHorizontal: 20,
            }}
            placeholder="Ten mon an"
          />
          <TextInput
            style={{
              height: 50,
              borderColor: 'black',
              borderWidth: 1,
              margin: 10,
              fontSize: 20,
              paddingHorizontal: 20,
            }}
            secureTextEntry={true}
            keyboardType="number-pad"
            placeholder="Gia mon an"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#28a745',
                padding: 15,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Add Food
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>this.toggleForm()}
              style={{
                backgroundColor: 'red',
                padding: 15,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() =>this.toggleForm()}
          style={{
            paddingVertical: width / 30,
            backgroundColor: '#28a745',
            alignItems: 'center',
            borderRadius: width / 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: width / 15,
            }}>
            +
          </Text>
        </TouchableOpacity>
      );
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={{flex : 1}}>
          <View style={{marginBottom : 10}}>{this.renderForm()}</View>
          <FlatList
              data={this.state.listMonan}
              showsVerticalScrollIndicator={false}
              extraData={this.state}
              keyExtractor={(item,index) => item.id + ''}
              renderItem={({item,index}) => this.renderItemList(item)}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{width : '100%' , height: 2 , backgroundColor : 'black'}}/>
                );
              }}
            />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
