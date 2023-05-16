import React, { FC } from 'react';
import Link from 'next/link';
import { TUser } from '@/types/userTypes';

type TUserCardProps = {
  data: TUser;
};

export const UserCard: FC<TUserCardProps> = ({ data }) => {
  return (
    <>
      <Link
        href={`/users/${data.id}`}
        className='shadow-md bg-white block rounded-md border-[1px] border-gray-500 p-[20px] cursor-pointer'
      >
        <h1>
          {data.firstName} {data.lastName}
        </h1>
        <p>{data.email}</p>
      </Link>
    </>
  );
};
