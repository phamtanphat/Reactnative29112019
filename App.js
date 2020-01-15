import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextView from './src/TextView';
import Word from './src/Word';
import {width, height} from './src/dimension';
import MyFlatlist from './src/MyFlatlist';
import MyState from './src/MyState';
import List from './src/List';
import Mymodal from './src/Mymodal';
import Box from './src/Box';
import {Provider} from 'react-redux';
import store from './src/redux/store';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: width / 20}}>
          <Provider store={store}>
            <List />
          </Provider>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
