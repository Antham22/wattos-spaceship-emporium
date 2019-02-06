import { connect } from 'react-redux';
import CheckoutPage from "../containers/CheckoutPage";
import { removeFromCart, purchaseFromCart } from "../actions/cart";

const mapStateToProps = state => {
  return {
    items: state.cart.items,
    credits: state.cart.credits
  }
}

const mapDispatchToProps = dispatch => ({
  removeFromCart: item => dispatch(removeFromCart(item)),
  purchaseFromCart: obj => dispatch(purchaseFromCart(obj))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
