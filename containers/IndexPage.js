import React, { Component } from 'react';
import { Link } from '../routes';
import { getSpaceships } from '../actions';

import Layout from '../components/layouts/Layout';
import IndexCard from '../components/IndexCard';
import IndexList from '../components/IndexList';

export default class IndexPage extends Component {
  static async getInitialProps({store, req}) {
    if (req) {
      await store.dispatch(getSpaceships())
    }
    const { spaceships } = await store.getState();
    const isSpaceshipsLoaded = spaceships.length;

    if (!isSpaceshipsLoaded) {
      await store.dispatch(getSpaceships());
    }
  }
  render() {
    const {spaceships, cart} = this.props;
    return(
      <Layout
        credits ={cart.credits}
        cartTotal={cart.items.length}>
          <h2>Spaceships</h2>
          <IndexList>
            <>
              {spaceships.map((spaceship, index) =>
                <IndexCard
                  key={index}
                  name={spaceship.name}
                  price={spaceship.price}
                  slug={spaceship.slug}
                  />)}
              <IndexCard dummy />
            </>
          </IndexList>
      </Layout>
    )
  }
}
