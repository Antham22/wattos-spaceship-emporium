import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`

const ShowTitle = ({name, price}) => (
    <Container>
      <h2>{name}</h2>
      <h3>{price || "SOLD OUT"}</h3>
    </Container>
)

export default ShowTitle
