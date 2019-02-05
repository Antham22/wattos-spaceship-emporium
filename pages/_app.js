import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import {initializeStore} from "../store";

export default withRedux(initializeStore)(
  class WattosShop extends App {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps
                  ? await Component.getInitialProps(ctx) : {}),
            }
        };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
            <div>hello</div>
          </Provider>
        </Container>
      );
    }
  }
);
