import {TOGGLE_MEMORIZED} from './actionType';

export function toggleMemorized(id) {
  return {type: TOGGLE_MEMORIZED, id};
}
