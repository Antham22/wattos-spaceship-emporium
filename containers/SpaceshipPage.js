import React, { Component } from 'react';

export default class SpaceshipPage extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { currentShip } = this.props;
    return(
      <div>
        <h1>{currentShip.name}</h1>
        <h2>Class: {currentShip.class}</h2>
        <h3>Manufacturer : {currentShip.manufacturer}</h3>
        <h4>Techspecs</h4>
        <>
          {Object.entries(currentShip.techspecs).map(([key, value], index) =>
            <li key={index}>{`${key}: ${value}`}</li>
          )}
        </>
      </div>
    )
  }
}
