import React, { Component } from 'react';
import { Link } from '../routes';
import { getSpaceships } from '../actions';

import Layout from '../components/layouts/Layout';

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
          <>
          {spaceships.map((spaceship, index) => {
            return (
              <li key={index}>
                <Link route='spaceship' params={{slug: spaceship.slug}}>
                  <a>{spaceship.name}</a>
                </Link>
              </li>
            )
          })}
          </>
      </Layout>
    )
  }
}
