import React, { Component } from 'react';
import { Link } from '../routes'

export default class IndexPage extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const {spaceships} = this.props;
    return(
      <div>
        <h1>Watto's Spaceship Emporium</h1>
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
      </div>
    )
  }
}
