import { connect } from 'react-redux';
import IndexPage from "../containers/IndexPage";
import { getSpaceships } from "../actions";

const mapStateToProps = state => {
  return {
    loading: state.loading,
    spaceships: state.spaceships,
    cart: state.cart
  }
}
export default connect(
  mapStateToProps
)(IndexPage);
