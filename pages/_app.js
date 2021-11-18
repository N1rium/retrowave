import 'tailwindcss/tailwind.css';
import GlobalStyle from '../global';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
