import React, { FC } from 'react';
import Link from 'next/link';
import { Cart } from '../Cart';

export const Nav: FC = () => {
  return (
    <div className='flex justify-between items-center gap-[30px] py-[20px]'>
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
      <Cart />
    </div>
  );
};
