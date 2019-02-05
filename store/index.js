import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';

const initState = {
  loading: {
    isLoading: false,
    error:""
  },
  spaceships: [],
  cart: []
};

export default (initialState = initState) =>
  createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware, logger)
  );
