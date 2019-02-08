import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

`

const ImageWrapper = styled.div`
  max-width: 400px;
`

const MainImage = styled.img `
  width: 100%;
  height: 240px;
`

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const Thumbnail = styled.img`
  cursor:pointer;
  width: 50px;
  height: 50px;
`

const Carousel = ({current, slug, handleThumbnailClick}) => (
    <Container>
      <ImageWrapper>
          <MainImage src={`/static/${slug}/${current}.png`} />
      </ImageWrapper>
      <ThumbnailContainer>
        {[...Array(5).keys()].map((num, i) =>
          <Thumbnail
            key={i}
            src={`/static/${slug}/${num}.png`}
            onClick={()=>{handleThumbnailClick(num)}}
            />)}
      </ThumbnailContainer>
    </Container>
)

export default Carousel
