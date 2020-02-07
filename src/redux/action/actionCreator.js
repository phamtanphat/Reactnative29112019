import * as actionType from './actionType';

export function toggleForm() {
  return {type: actionType.TOGGLE_FORM};
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

export function addWord(en, vn) {
  return dispatch => {
    fetch('https://server2301.herokuapp.com/word', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({en, vn}),
    })
      .then(response => response.json())
      .then(data => dispatch({type: actionType.ADD_WORD, newWord: data.word}));
  };
}
export function toggleMemorized(_id, isMemorized) {
  return dispatch => {
    fetch(`https://server2301.herokuapp.com/word/${_id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({isMemorized}),
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: actionType.TOGGLE_MEMORIZED,
          _id,
          isMemorized: data.w.isMemorized,
        }),
      );
  };
}

export function removeWord(_id) {
  return dispatch => {
    fetch(`https://server2301.herokuapp.com/word/${_id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => dispatch({type: actionType.REMOVE_WORD, _id}));
  };
}
