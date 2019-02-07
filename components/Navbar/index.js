import React from 'react';
import {Link} from '../../routes';
import styled, { css } from 'styled-components';

const logo = "/static/wse_logo_white.png";
const coin = "/static/credit_icon.png";
const cart = "/static/cart_icon.png";
const Nav = styled.nav`
  padding: 0 4%;
  color: #F5D350;
  background: #1C1F26;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavSection = styled.div`
  display: flex;
  align-items: center;
  ${props =>
    props.primary &&
    css`
      cursor: pointer;
      &&:hover {
        opacity: .8;
      }
    `};

`
const Brand = styled.img`
  cursor: pointer;
  height: 64px;
  margin-right: 5px;
`
const Credits = styled.div`
  color: #F5D350;
  font-style: italic;
  margin-right: 3px;
`
const Coin = styled.img`
  height:18px;
  margin-right: 20px;
`
const CartIcon = styled.img`
  height: 30px;
  margin-right: 5px;
`
const CartTotal = styled.div`
  width: 20px;
`
const Navbar = ({title, credits, cartTotal}) => (
  <Nav>
    <Link route="index">
      <NavSection primary>
        <Brand src={logo}/>
        <div><h1>Watto's Space Emporium</h1></div>
      </NavSection>
    </Link>
    <NavSection>
      <Credits>{`${parseInt(credits).toLocaleString()}` || 0}</Credits>
      <Coin src={coin} />
      <Link route="checkout">
        <NavSection primary>
          <CartIcon src={cart} />
          <CartTotal>{cartTotal}</CartTotal>
        </NavSection>
      </Link>

    </NavSection>
  </Nav>
)

export default Navbar
