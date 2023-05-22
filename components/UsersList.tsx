import React, { FC } from 'react';
import { UserCard } from './UserCard';
import type { UserData } from '../types';

type UserListProps = {
  users: UserData[];
};

export const UsersList: FC<UserListProps> = ({ users }) => {
  if (!users || !users.length) {
    return null;
  }

  return (
    <div className='grid grid-cols-3 gap-[5px] max-[768px]:grid-cols-2 max-[576px]:grid-cols-1'>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
