import React, { FC } from 'react';
import Link from 'next/link';
import { UserData } from '@/types/userTypes';

type UserCardProps = {
  data: UserData;
};

export const UserCard: FC<UserCardProps> = ({ data }) => {
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
