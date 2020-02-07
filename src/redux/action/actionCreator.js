import * as actionType from './actionType';

export function toggleMemorized(id) {
  return {type: actionType.TOGGLE_MEMORIZED, id};
}

export function addWord(newWord) {
  return {type: actionType.ADD_WORD, newWord};
}

export function toggleForm() {
  return {type: actionType.TOGGLE_FORM};
}

export function removeWord(id) {
  return {type: actionType.REMOVE_WORD, id};
}
export function setFilterMode(filterMode) {
  return {type: actionType.SET_FILTER_MODE, filterMode};
}

export function fetchWordsApi() {
  return dispatch => {
    fetch('https://server2301.herokuapp.com/word', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data =>
        dispatch({type: actionType.FETCH_WORDS_API, words: data.words}),
      );
  };
}
