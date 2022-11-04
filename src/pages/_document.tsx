import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>LED - MÍDIA</title>
        <Head>
          <link rel="shortcut icon" href="/img/ledMidia.svg" />
          <link rel="apple-touch-icon" href="/img/ledMidia.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700&family=Saira:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
