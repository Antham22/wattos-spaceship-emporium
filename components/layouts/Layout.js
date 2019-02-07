import Wrapper  from './Wrapper';
import Navbar   from '../Navbar';
import Footer   from '../Footer';

export default ({ children, credits, cartTotal }) => (
  <Wrapper>
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
