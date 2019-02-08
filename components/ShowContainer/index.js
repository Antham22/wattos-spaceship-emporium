import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
`

const ShowContainer = ({children}) => (
    <Container>
      {children}
    </Container>
)

export default ShowContainer
