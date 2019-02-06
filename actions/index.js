import actionTypes from "./actionTypes";
import fetch from 'isomorphic-unfetch';
import slugify from 'slugify';

export const getSpaceships = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_SPACESHIPS_REQUEST });
  try {
    const res = await fetch('http://demo7475333.mockable.io/spaceships');
    const { products } = await res.json();
    const spaceships = products.map(item => Object.assign({}, item, {slug: slugify(item.name.toLowerCase())}))
    dispatch({type: actionTypes.FETCH_SPACESHIPS_SUCCESS });
    dispatch({ type: actionTypes.LOAD_SPACESHIPS, payload: spaceships });
  } catch (e) {
    console.log(e)
    dispatch({ type: actionTypes.FETCH_SPACESHIPS_ERROR, payload: e });
  }
};
