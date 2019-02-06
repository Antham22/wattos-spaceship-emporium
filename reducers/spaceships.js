import actionTypes from '../actions/actionTypes';
import slugify from 'slugify';
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_SPACESHIPS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
