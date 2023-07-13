import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11231386648"
          ></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'AW-11231386648');
            `}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
