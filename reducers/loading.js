import actionTypes from '../actions/actionTypes';
const initialState = {
  isLoading: false,
  error: ""
}
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SPACESHIPS_REQUEST:
      console.log(action)
      return Object.assign({}, state, {
        isLoading: true
      });
    case actionTypes.FETCH_SPACESHIPS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });
    case actionTypes.FETCH_SPACESHIPS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      });
    default:
      return state;
  }
};
