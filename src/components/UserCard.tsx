import React, { FC } from 'react';
import Link from 'next/link';
import { TUser } from '@/types/userTypes';

export const UserCard: FC<{ data: TUser }> = ({ data }) => {
  return (
    <>
      <Link
        href={`/users/${data.id}`}
        className='shadow-md bg-white block rounded-[6px] border-[1px] border-gray-500 p-[20px] cursor-pointer'
      >
        <h1>
          {data.firstName} {data.lastName}
        </h1>
        <p>{data.email}</p>
      </Link>
    </>
  );
};
