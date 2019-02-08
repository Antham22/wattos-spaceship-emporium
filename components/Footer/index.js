import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  padding: 15px;
  color: #F5D350;
  background: #1C1F26;
  text-align: right;
`
const Wrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content: flex-end;

`
const Yoda = styled.img `
  width: 50px;
`
const Link = styled.a`
  color
`
const Footer = ({children}) => (
  <Container>
    <Wrapper>
      <div>Made with </div>
      <div><Yoda src="/static/yoda_icon.png" /> </div>
      <div>by <a href="https://github.com/Antham22">antham22</a></div>
    </Wrapper>
  </Container>
)

export default Footer
