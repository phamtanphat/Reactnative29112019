export default function filterModeReducer(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.filterMode;
  }
  return state;
}
