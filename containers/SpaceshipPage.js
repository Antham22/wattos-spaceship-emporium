import React, { Component } from 'react';

export default class SpaceshipPage extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return(
      <div>
        spaceship
      </div>
    )
  }
}
