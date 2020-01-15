import * as actionType from './actionType';

export function toggleMemorized(id) {
  return {type: actionType.TOGGLE_MEMORIZED, id};
}
