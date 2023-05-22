import { FC } from 'react';
import { Layout } from '../components/layout/Layout';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default App;
