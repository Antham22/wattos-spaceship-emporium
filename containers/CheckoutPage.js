import React, { Component } from 'react';
import { removeFromCart } from "../actions/cart";

import Layout from '../components/layouts/Layout';

export default class CheckoutPage extends Component {
  static async getInitialProps({store, req, query: { slug }}) {
    // if (req) {
    //   await store.dispatch(getSpaceships())
    // }
    // const { spaceships } = await store.getState();
    // const isSpaceshipsLoaded = spaceships.length;
    //
    // if (!isSpaceshipsLoaded) {
    //   await store.dispatch(getSpaceships());
    // }
    //
    // const currentShip = await spaceships.find(item => item.slug === slug);
    // return { currentShip }
  }

  generateTotal(items, option) {
    const total = items
    .map(i => parseInt(i.price.split(" ")[0].replace(/,/g, '')))
    .reduce((a, b) => a + b, 0)
    return option ? total : `${total.toLocaleString()} credits`
  }

  handleRemoveFromCartClick = index => {
    const { items, removeFromCart } = this.props;
    removeFromCart(items[index])
  }

  handlePurchaseClick = event => {
    const {items, credits, purchaseFromCart } = this.props;
    const transaction = credits - this.generateTotal(items, true);
    if(transaction < 0) {
      alert("Insufficient funds :(")
      return;
    } else {
      purchaseFromCart({items, transaction})
    }
  }

  render() {
    const { items, credits } = this.props;
    return(
      <Layout
        credits={credits}
        cartTotal={items.length}>
        <h2>Checkout</h2>
        <>
        {items.length ? items.map((item, index) =>
            <div key={index}>
              <span>{item.name} - {item.price}</span>
              <span><button onClick={()=>{this.handleRemoveFromCartClick(index)}}>Remove</button></span>
            </div>
        ) : <div>No items in cart!</div>}
        </>
      <h3>Total: {this.generateTotal(items)}</h3>
      <button onClick={this.handlePurchaseClick}>Puchase</button>
      </Layout>
    )
  }
}
