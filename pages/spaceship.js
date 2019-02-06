import { connect } from 'react-redux';
import SpaceshipPage from "../containers/SpaceshipPage";
import { addToCart } from '../actions/cart';

const mapStateToProps = state => {
  return {
    loading: state.loading,
    spaceships: state.spaceships,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: spaceship => dispatch(addToCart(spaceship))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceshipPage);
