import actionTypes from '../actions/actionTypes';
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_SPACESHIPS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
