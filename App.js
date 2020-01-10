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
import {createStore} from 'redux';

const store = createStore((state = 0, action) => {
  if (action.type === 'INCREASE') {
    return state + 1;
  }
  return state;
});

console.log(store.getState());
store.dispatch({type: 'INCREASE'});
console.log(store.getState());

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: width / 20}}>
          {/* {words.map(item => {
            return <Word word={item} key={item.id} />;
          })} */}
          {/* <List />
          <MyFlatlist /> */}
          <List />
          {/* <Mymodal /> */}
          {/* <Box /> */}
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
