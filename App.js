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
import {Provider} from 'react-redux';

const defWords = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
];

const defstore = {
  words: defWords,
  shouldShowForm: false,
  filterMode: 'SHOW_ALL',
};

const store = createStore((state = defstore, action) => {
  if (action.type === 'TOGGLE_FORM') {
    return {...state, shouldShowForm: !state.shouldShowForm};
  }
  if (action.type === 'ADD_WORD') {
    const newListWord = state.words.concat(action.newWord);
    newListWord.sort((a, b) => a.name > b.name);
    return {
      ...state,
      shouldShowForm: !state.shouldShowForm,
      words: newListWord,
    };
  }
  return state;
});

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: width / 20}}>
          {/* {words.map(item => {
            return <Word word={item} key={item.id} />;
          })} */}
          {/* <MyFlatlist /> */}
          {/* <List /> */}
          {/* <Box/> */}
          {/* <Mymodal /> */}
          <Provider store={store}>
            <List />
          </Provider>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
