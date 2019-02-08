import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 25px;

`
const Wrapper = styled.div`
  & li {
    padding: 5px 0;
    font-size 14px;
  }
`

const ShowList = ({children}) => (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
)

export default ShowList
