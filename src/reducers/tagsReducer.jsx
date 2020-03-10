import * as constants from '../constants/index';

export default function(state = [], action) {
  switch (action.type) {
    case constants.GET_ALL_TAGS:
      return action.payload;
    default:
      return state;
  }
}
