import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  // width: 50%;
`

const ShowColumn = ({children}) => (
    <Container>
      {children}
    </Container>
)

export default ShowColumn
