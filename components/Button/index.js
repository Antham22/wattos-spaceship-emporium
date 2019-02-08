import React from 'react';
import { Link } from '../../routes';
import styled from 'styled-components';

const Container = styled.button`
  height:50px;
  width: 150px;
  background: #1C1F26;
  color: #F5D350;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  line-height: 14px;
  text-align: center;
`

const Button = ({handleClick, text, link, route}) => (
  link ? <Link route={route}><div><Container>{text}</Container></div></Link>
  :<Container onClick={handleClick}>{text}</Container>
)

export default Button
