import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import initialState from './initialState';

const initialState = {
  loading: false,
  products: [],
  cart: []
};

export default (initialState: initialState) =>
  createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
