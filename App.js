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
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const defWords = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
];

function wordReducer(state = defWords, action) {
  return state;
}
function filterModeReducer(state = 'SHOW_ALL', action) {
  return state;
}
function shouldShowFormReducer(state = true, action) {
  return state;
}

const rootReducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
  shouldShowForm: shouldShowFormReducer,
});

const store = createStore(rootReducer);

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

// const store = createStore((state = defstore, action) => {
//   if (action.type === 'TOGGLE_FORM') {
//     return {...state, shouldShowForm: !state.shouldShowForm};
//   }
//   if (action.type === 'ADD_WORD') {
//     const newListWord = state.words.concat(action.newWord);
//     newListWord.sort((a, b) => a.name > b.name);
//     return {
//       ...state,
//       shouldShowForm: !state.shouldShowForm,
//       words: newListWord,
//     };
//   }
//   if (action.type === 'TOGGLE_MEMORIZED') {
//     const words = state.words.map(word => {
//       if (word.id === action.id) {
//         return {...word, isMemorized: !word.isMemorized};
//       }
//       return word;
//     });
//     return {...state, words};
//   }
//   if (action.type === 'REMOVE_WORD') {
//     const words = state.words.filter(word => {
//       if (word.id === action.id) {
//         return false;
//       }
//       return true;
//     });
//     return {...state, words};
//   }
//   if (action.type === 'SET_FILTER_MODE') {
//     return {...state, filterMode: action.filterMode};
//   }
//   return state;
// });