import React from 'react';
import {Link} from '../../routes';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Navbar = ({title, credits, cartTotal}) => (
  <Nav>
    <div><h1>Watto's Spaceship Emporium</h1></div>
    <div>
      <span>{`${parseInt(credits).toLocaleString()} cr` || 0} </span>
      <Link route="checkout"><a>Cart ({cartTotal || 0})</a></Link>
    </div>
  </Nav>
)

export default Navbar
