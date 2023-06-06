import React, { FC } from 'react';
import { Nav } from './Nav';
import { Footer } from '../Footer';
import { Backdrop } from '../Backdrop';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Backdrop />
      <header className='w-full fixed z-10 bg-fixed shadow-sm shadow-[#9696969c] bg-[url(../public/images/black-bgc.png)]'>
        <Nav />
      </header>
      <main className='pt-10'>{children}</main>
      <Footer />
    </>
  );
};
