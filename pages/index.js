import { connect } from 'react-redux';
import Index from "../components/Index";
import { getSpaceships } from "../actions";

Index.getInitialProps = async ({store, isServer}) => {
    await store.dispatch(getSpaceships());
  // const { spaceships } = await store.getState();
  // console.log(spaceships)
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    spaceships: state.spaceships,
    cart: state.carts
  }
}

export default connect(mapStateToProps)(Index);
