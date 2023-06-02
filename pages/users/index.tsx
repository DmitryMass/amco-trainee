import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { SearchPanel } from '../../components/SearchPanel';
import { UsersList } from '../../components/UsersList';
import { Pagination } from '../../components/Pagination';
import { getUsers } from '../../utils/usersUtils';
import type { UserData } from '../../types';

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
    <div className='px-[10px] py-[30px] max-w-[1320px] mx-auto w-full'>
      <SearchPanel />
      <UsersList users={users} />
      <Pagination />
    </div>
  );
};

export default UsersPage;
