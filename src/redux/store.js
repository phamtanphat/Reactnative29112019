import {createStore, combineReducers} from 'redux';

const defWords = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
];

function wordReducer(state = defWords, action) {
  if (action.type === 'TOGGLE_MEMORIZED') {
    const words = state.map(word => {
      if (word.id === action.id) {
        return {...word, isMemorized: !word.isMemorized};
      }
      return word;
    });
    return words;
  }
  if (action.type === 'ADD_WORD') {
    const newListWord = state.concat(action.newWord);
    newListWord.sort((a, b) => a.name > b.name);
    return newListWord;
  }
  if (action.type === 'REMOVE_WORD') {
    const words = state.filter(word => {
      if (word.id === action.id) {
        return false;
      }
      return true;
    });
    return words;
  }
  return state;
}
function filterModeReducer(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.filterMode;
  }
  return state;
}
function shouldShowFormReducer(state = false, action) {
  if (action.type === 'TOGGLE_FORM') {
    return !state;
  }
  if (action.type === 'ADD_WORD') {
    return !state;
  }
  return state;
}

const rootReducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
  shouldShowForm: shouldShowFormReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
