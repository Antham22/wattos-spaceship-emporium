import actionTypes from '../actions/actionTypes';
import slugify from 'slugify';
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_SPACESHIPS:
      return [...state, ...action.payload];
    case actionTypes.PURCHASE_FROM_CART:
      return updateInventory(state, action.payload.items);
    default:
      return state;
  }
};

function updateInventory(spaceships, cart) {
  const inventory = spaceships.map((ss) => {
    let match = cart.find(i => i.name === ss.name)
    if(match) delete ss.price
    return ss
  })
    return [...inventory]
}
