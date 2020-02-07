import {createStore, combineReducers, applyMiddleware} from 'redux';
import wordReducer from './reducers/wordReducer';
import thunk from 'redux-thunk';
import filterModeReducer from './reducers/filterModeReducer';
import shouldShowFormReducer from './reducers/shouldShowFormReducer';

const rootReducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
  shouldShowForm: shouldShowFormReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
