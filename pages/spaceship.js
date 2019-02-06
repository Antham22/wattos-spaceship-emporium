import { connect } from 'react-redux';
import SpaceshipPage from "../containers/SpaceshipPage";
import { getSpaceships } from '../actions';

SpaceshipPage.getInitialProps = async ({store, isServer, query: { slug }}) => {
  if (isServer) {
    await store.dispatch(getSpaceships());
  }
  const { spaceships } = await store.getState();
  const spaceshipsLoaded = spaceships.length;

  if (!spaceshipsLoaded) {
    await store.dispatch(getSpaceships());
  }

  const currentShip = await spaceships.find(item => item.slug === slug)
  return { currentShip }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    spaceships: state.spaceships,
  }
}

export default connect(mapStateToProps)(SpaceshipPage);
