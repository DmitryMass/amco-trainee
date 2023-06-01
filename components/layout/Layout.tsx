import React, { FC } from 'react';
import { Nav } from './Nav';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className='w-full fixed z-10 bg-[#061c52] shadow-md'>
        <Nav />
      </header>
      <main className='max-w-[1320px] pt-[90px] px-[15px] mx-auto w-full h-full'>
        {children}
      </main>
    </>
  );
};
