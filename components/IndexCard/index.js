import React from 'react';
import {Link} from '../../routes';
import styled, { css } from 'styled-components';


const Container = styled.div`
  text-align: center;
  flex: 1 0 30%;
  margin: 10px;
  display:flex;
  flex-direction: column;
  border-radius: 4px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &&:hover {
    transform: scale(1.1);
  }
`
const Dummy = styled.div`
  flex: 1 0 30%;
  margin: 10px;
`

const AssetContainer = styled.div`
padding: 20px;
display: flex;
background-image: url(${'./static/backgrounds/star_background.png'});
background-repeat: no-repeat;
background-position: right top;
align-items: center;
justify-content: center;
height: 100%;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
`

const Asset = styled.div`
  max-width: 300px;

`

const Image = styled.img`
  width: 80%;
`
const Description = styled.div`
  display: flex;
  height: 35%;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0 2px 4px 0 rgba(51,64,75,.1), 0 4px 30px 0 rgba(38,136,220,.1);
`
const Name = styled.div`
  font-weight: 600;
`
const Price = styled.div`
   font-style: italic;
`

const IndexCard = ({name, price, slug, dummy}) => (
  dummy ?
  <Dummy />
  :<Link route="spaceship" params={{slug: slug}}>
    <Container>
      <AssetContainer><Asset><Image src={`/static/${slug}/0.png`}/></Asset></AssetContainer>
      <Description>
        <Name>{name}</Name>
        <Price>{price || "SOLD OUT"}</Price>
      </Description>
    </Container>
  </Link>
)

export default IndexCard
