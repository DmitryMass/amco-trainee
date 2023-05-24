import React, { FC } from 'react';
import Link from 'next/link';

export const Nav: FC = () => {
  return (
    <div className='flex justify-center items-center gap-[30px] py-[20px]'>
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
    </div>
  );
};
