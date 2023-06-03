import { FC } from 'react';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout/Layout';
import { CartProvider } from '../components/store/CartProvider';
import { LikedProductProvider } from '../components/store/LikedProductProvider';
import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <LikedProductProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </LikedProductProvider>
  );
};
export default App;
