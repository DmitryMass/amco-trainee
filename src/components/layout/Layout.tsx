import React, { FC } from 'react';
import { Nav } from './Nav';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className='min-h-[80px]'>
        <Nav />
      </header>
      <main className='max-w-[1320px] px-[15px] mx-auto w-full h-full'>
        {children}
      </main>
    </>
  );
};
