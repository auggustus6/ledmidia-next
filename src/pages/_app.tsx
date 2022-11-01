import Head from "next/head";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>LED - MÍDIA</title>
          <link rel="shortcut icon" href="/img/ledMidia.svg" />
          <link rel="apple-touch-icon" href="/img/ledMidia.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700&family=Saira:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
