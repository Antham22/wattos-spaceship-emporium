import React from 'react';
import Head from 'next/head'
import Wrapper  from './Wrapper';
import Navbar   from '../Navbar';
import Footer   from '../Footer';

export default ({ children, credits, cartTotal }) => (
  <Wrapper>
    <Head>
      <title>WSE | Watto's Spaceship Emporium</title>
    </Head>
    <header>
      <Navbar credits={credits} cartTotal={cartTotal} />
    </header>
    <main>
      { children }
    </main>
    <Footer />
  </Wrapper>
)
