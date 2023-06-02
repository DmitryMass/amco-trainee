import React, { FC } from 'react';
import Link from 'next/link';
import { Cart } from '../store/Cart';
import { useRouter } from 'next/router';
import { navLink } from '../../utils/headerUtils';

export const Nav: FC = () => {
  const { pathname } = useRouter();

  return (
    <div className='relative flex justify-between items-center py-2.5 max-w-[1320px] px-[15px] mx-auto w-full'>
      <div className='flex gap-[5px]'>
        {navLink.map(({ link, name }) => (
          <Link key={name} className='text-white px-2.5 py-1' href={link}>
            {name}
          </Link>
        ))}
      </div>
      {pathname === '/store' ? <Cart /> : null}
    </div>
  );
};
