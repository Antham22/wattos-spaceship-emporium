import { connect } from 'react-redux';
import SpaceshipPage from "../containers/SpaceshipPage";
import { getSpaceship } from "../actions";

Index.getInitialProps = async ({store, isServer, query}) => {
  const { slug } = await query;
  const { spaceships } = await store.getState();
  const currentShip = await spaceship.find(item => item.slug === slug)
  console.log(currentShip)
    await store.dispatch(getSpaceships());
  // console.log(spaceships)
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    spaceships: state.spaceships,
    cart: state.carts
  }
}

export default connect(mapStateToProps)(Spaceship);
