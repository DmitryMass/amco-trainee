import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={inter.className}>
      <h1 className='text-[25px] leading-[32px] font-bold mb-[20px]'>
        Home Page.
      </h1>
    </main>
  );
};

export default Home;
