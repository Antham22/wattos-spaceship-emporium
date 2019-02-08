import React, { Component } from 'react';
import { removeFromCart } from "../actions/cart";

import Layout from '../components/layouts/Layout';
import CheckoutContainer from '../components/CheckoutContainer';
import CheckoutList from '../components/CheckoutList';
import Button from '../components/Button';

export default class CheckoutPage extends Component {
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
        <CheckoutContainer>
          <CheckoutList items={items} handleRemoveFromCartClick={this.handleRemoveFromCartClick} />
        <h3>Total: {this.generateTotal(items)}</h3>
        {
          items.length <= 0 ?
          <Button
            link
             route="index"
             text="conitnue shopping"
          />
        :<Button text="Puchase" handleClick={this.handlePurchaseClick} />
        }
        </CheckoutContainer>
      </Layout>
    )
  }
}
