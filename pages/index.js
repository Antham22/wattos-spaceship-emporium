import { connect } from 'react-redux';
import IndexPage from "../containers/IndexPage";
import { getSpaceships } from "../actions";

IndexPage.getInitialProps = async ({store, isServer}) => {
    await store.dispatch(getSpaceships());
  const { spaceships } = await store.getState();
  // console.log(spaceships)
  // return { spaceships }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    spaceships: state.spaceships,
    // cart: state.carts
  }
}

export default connect(mapStateToProps)(IndexPage);
