export default function wordReducer(state = [], action) {
  if (action.type === 'TOGGLE_MEMORIZED') {
    const words = state.map(word => {
      if (word._id === action._id) {
        return {...word, isMemorized: action.isMemorized};
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
      if (word._id === action._id) {
        return false;
      }
      return true;
    });
    return words;
  }
  if (action.type === 'FETCH_WORDS_API') {
    return action.words;
  }
  return state;
}
