import React from 'react';
import { Nav } from './Nav';

export const Layout = ({ children }: { children: React.ReactNode }) => {
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
