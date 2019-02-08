import React, { Component } from 'react';
import { Link } from '../routes';
import { getSpaceships } from "../actions";

import Layout from '../components/layouts/Layout';
import ShowContainer from '../components/ShowContainer';
import ShowColumn from '../components/ShowColumn';
import ShowTitle from '../components/ShowTitle';
import ShowList from '../components/ShowList';
import Carousel from '../components/Carousel';
import Button from '../components/Button';


export default class SpaceshipPage extends Component {
  constructor() {
    super()
    this.state = {
      current: 0
    }
  }
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
    const { cart: {items}, addToCart, currentShip: {name, price, slug} } = this.props;
    const item = {name, price, slug};
    const exist = items.filter(i => i.name === item.name).length > 0;
    if(price && !exist) addToCart(item)
  }

  handleThumbnailClick = number => {
    this.setState({current: number})
  }

  render() {
    const { currentShip, cart, credits } = this.props;
    const { current } = this.state;
    return(
      <Layout
        credits={cart.credits}
        cartTotal={cart.items.length}>
        <ShowContainer>
          <ShowColumn>
            <ShowTitle name={currentShip.name} price={currentShip.price}/>
            <Carousel
              handleThumbnailClick={this.handleThumbnailClick}
              current={current}
              slug={currentShip.slug} />
          </ShowColumn>
          <ShowColumn>
            <h3>Class: {currentShip.class}</h3>
            <h3>Manufacturer : {currentShip.manufacturer}</h3>
            <h3>Techspecs</h3>
            <ShowList>
              <>
              {Object.entries(currentShip.techspecs).map(([key, value], index) =>
                <li key={index}>{`${key}: ${value}`}</li>
              )}
              </>
            </ShowList>
          <Button text="Add to cart" handleClick={this.handleAddtoCartClick} />
          </ShowColumn>
        </ShowContainer>
      </Layout>
    )
  }
}
