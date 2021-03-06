import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const CheckoutContainer = ({children}) => (
    <Container>
      {children}
    </Container>
)

export default CheckoutContainer
