import React, { Component } from 'react';
import { getSpaceships } from "../actions";

import Layout from '../components/layouts/Layout';

export default class SpaceshipPage extends Component {
  static async getInitialProps({store, req, query: { slug }}) {
    if (req) {
      await store.dispatch(getSpaceships())
    }
    const { spaceships } = await store.getState();
    const isSpaceshipsLoaded = spaceships.length;

    if (!isSpaceshipsLoaded) {
      await store.dispatch(getSpaceships());
    }

    const currentShip = await spaceships.find(item => item.slug === slug);
    return { currentShip }
  }

  handleAddtoCartClick = event => {
    const { cart: {items}, addToCart, currentShip: {name, price} } = this.props;
    const item = {name, price};
    const exist = items.filter(i => i.name === item.name).length > 0;
    if(price && !exist) addToCart(item)
  }

  render() {
    const { currentShip, cart, credits } = this.props;
    return(
      <Layout
        credits={cart.credits}
        cartTotal={cart.items.length}>
        <h2>{currentShip.name} - {currentShip.price || "SOLD OUT"}</h2>
        <h3>Class: {currentShip.class}</h3>
        <h3>Manufacturer : {currentShip.manufacturer}</h3>
        <h3>Techspecs</h3>
        <>
          {Object.entries(currentShip.techspecs).map(([key, value], index) =>
            <li key={index}>{`${key}: ${value}`}</li>
          )}
        </>
      <button onClick={this.handleAddtoCartClick}>Add to cart</button>
      </Layout>
    )
  }
}
