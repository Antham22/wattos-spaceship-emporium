import actionTypes from '../actions/actionTypes';
const initState = {items: [], credits: 1000000}
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return Object.assign({}, state, {
        items: [...state.items, action.payload]
      });
    case actionTypes.REMOVE_FROM_CART:
      return Object.assign({}, state, {
        items: removeFromCart(state.items, action.payload)
      });
    case actionTypes.PURCHASE_FROM_CART:
      return Object.assign({}, state, {
        items: [],
        credits: action.payload.transaction
      });
    default:
      return state;
  }
};

function removeFromCart(array, item) {
  return array.filter(i => i !== item)
}
