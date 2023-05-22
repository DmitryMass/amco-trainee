import React, { FC } from 'react';
import Link from 'next/link';
import type { UserData } from '../types';

type UserCardProps = {
  user: UserData;
};

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <>
      <Link
        href={`/users/${user.id}`}
        className='shadow-md bg-white block rounded-md border-[1px] border-gray-500 p-[20px] cursor-pointer'
      >
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <p>{user.email}</p>
      </Link>
    </>
  );
};
