import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Nosifer&family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />

          <GlobalStyles />

          <NextScript />
        </body>
      </Html>
    );
  }
}

function GlobalStyles () {
  return (
    <style jsx global>{`
      html, body, body > div:first-child, div#__next, div#__next > div {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      * {
        margin: 0;
        padding: 0;
      }

      body {
        background: #430d27;
        color: #1c002e;
        font-family: 'Open Sans', sans-serif;
        font-size: 24px;
        line-height: 24px;
      }

      .horizontal {
        display: flex;
        flex-direction: row;
      }

      .vertical {
        display: flex;
        flex-direction: column;
      }

      .acenter {
        align-items: center;
      }

      .jcenter {
        justify-content: center;
      }
    `}</style>
  );
}
