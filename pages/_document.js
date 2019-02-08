import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class SiteDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render () {
    const { styleTags } = this.props;
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
          <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
          {styleTags}
        </Head>
        <body style={{margin: 0, background: "#FAFAFA"}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
