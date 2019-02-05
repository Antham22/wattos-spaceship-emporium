import actionTypes from "./actionTypes";
import fetch from 'isomorphic-unfetch'

export const getSpaceships = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_SPACESHIPS_REQUEST });
  try {
    const res = await fetch('http://demo7475333.mockable.io/spaceships');
    const { products } = await res.json();
    dispatch({ type: actionTypes.LOAD_SPACESHIPS, payload: products });
  } catch (e) {
    console.log(e)
    dispatch({ type: actionTypes.FETCH_SPACESHIPS_ERROR, payload: e });
  }
};
