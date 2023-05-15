import React, { FC } from 'react';
import { TUser, TUserProps } from '@/types/userTypes';
import { UserCard } from './UserCard';

export const UsersList: FC<TUserProps> = ({ users }) => {
  if (!users || !users.length) {
    return null;
  }

  return (
    <div className='grid grid-cols-3 gap-[5px] max-[768px]:grid-cols-2 max-[576px]:grid-cols-1'>
      {users.map((user: TUser) => (
        <UserCard key={user.id} data={user} />
      ))}
    </div>
  );
};
