// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Your global head tags */}
          
        </Head>
        <body>
          <Main />
          <NextScript />
          <script key="jquery" src="https://code.jquery.com/jquery-3.6.0.min.js" />
          <script key="webflow" src="/js/webflow.js" />
          <script key="custom" src="/js/script.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;