import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const IndexList = ({children}) => (
    <Container>
      {children}
    </Container>
)

export default IndexList
