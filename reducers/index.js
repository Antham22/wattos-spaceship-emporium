import { combineReducers } from 'redux';
import loading from './loading';
import spaceships from './spaceships';

export default combineReducers({ loading, spaceships });
