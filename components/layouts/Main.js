import Head from 'next/head';
import Wrapper from './Wrapper';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default ({ children, title = 'This is the default title', credits, cartTotal }) => (
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Navbar credits={credits} cartTotal={cartTotal} />
    </header>

    <main>
      { children }
    </main>

    <Footer>
      Footer
    </Footer>
  </Wrapper>
)
