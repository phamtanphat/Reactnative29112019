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
export function setFilterMode(filterMode) {
  return {type: actionType.SET_FILTER_MODE, filterMode};
}
