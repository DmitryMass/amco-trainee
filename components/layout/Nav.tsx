import React, { FC } from 'react';
import Link from 'next/link';
import { Cart } from '../store/Cart';
import { useRouter } from 'next/router';

export const Nav: FC = () => {
  const { pathname } = useRouter();

  return (
    <div className='relative flex justify-between items-center gap-[30px] py-[25px]  max-w-[1320px] px-[15px] mx-auto w-full'>
      <div className='flex gap-[5px]'>
        <Link
          className='bg-blue-500 text-white rounded-md px-[10px] py-[5px]  hover:shadow-md'
          href={'/'}
        >
          Home
        </Link>
        <Link
          className='bg-blue-500 text-white rounded-md px-[10px] py-[5px] hover:shadow-md'
          href={'/users'}
        >
          Users
        </Link>
        <Link
          className='bg-blue-500 text-white rounded-md px-[10px] py-[5px] hover:shadow-md'
          href={'/table'}
        >
          Table
        </Link>
        <Link
          className='bg-blue-500 text-white rounded-md px-[10px] py-[5px] hover:shadow-md'
          href={'/store'}
        >
          Store
        </Link>
      </div>
      {pathname === '/store' ? <Cart /> : null}
    </div>
  );
};
