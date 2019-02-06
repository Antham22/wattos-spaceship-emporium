import { combineReducers } from 'redux';
import loading from './loading';
import spaceships from './spaceships';
import cart from './cart';

export default combineReducers({
  loading,
  spaceships,
  cart
 });
