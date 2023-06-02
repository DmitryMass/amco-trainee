import { FC } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home: FC = () => {
  return (
    <div className={inter.className}>
      <div className='pt-[30px]'>
        <h1 className='text-[25px] leading-[32px] font-bold mb-[20px]'>
          Home Page.
        </h1>
      </div>
    </div>
  );
};

export default Home;
