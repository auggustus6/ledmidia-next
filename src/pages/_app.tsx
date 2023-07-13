import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/dist/shared/lib/router/router";

function App({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
