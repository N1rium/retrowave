import "tailwindcss/tailwind.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../global";
import Header from "@/components/Header";
import defaultTheme from "theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
