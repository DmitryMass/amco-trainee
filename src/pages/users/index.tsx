import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { Pagination } from '@/components/Pagination';
import { UsersList } from '@/components/UsersList';
import { SearchPanel } from '@/components/SearchPanel';
import type { UserData } from '@/types/userTypes';
import { getUsers } from '@/utils/usersUtils';

type UsersPageProps = {
  users: UserData[];
};

export const getServerSideProps: GetServerSideProps<UsersPageProps> = async (
  ctx
) => {
  let currentPage = 1;
  if (Number(ctx.query.page) >= 0) currentPage = Number(ctx.query.page);
  const skip = (currentPage - 1) * 10;

  const users = await getUsers(skip);

  if (!users) {
    return {
      notFound: true,
    };
  }
  return {
    props: { users },
  };
};

const UsersPage: FC<UsersPageProps> = ({ users }) => {
  return (
    <div className='px-[10px] py-[30px] bg-gray-200'>
      <SearchPanel />
      <UsersList users={users} />
      <Pagination />
    </div>
  );
};

export default UsersPage;
