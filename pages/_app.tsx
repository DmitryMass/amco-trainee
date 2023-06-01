import { FC } from 'react';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout/Layout';
import { CartProvider } from '../components/store/CartProvider';
import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
};
export default App;
