import {createStore, combineReducers} from 'redux';
import wordReducer from './reducers/wordReducer';
import filterModeReducer from './reducers/filterModeReducer';
import shouldShowFormReducer from './reducers/shouldShowFormReducer';

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
