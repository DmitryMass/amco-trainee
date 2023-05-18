import React, { FC } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
//
import { Pagination } from '@/components/Pagination';
import { UsersList } from '@/components/UsersList';
import { SearchPanel } from '@/components/SearchPanel';
//
import { UserData } from '@/types/userTypes';
import { getUsers } from '@/utils/usersApi';

type UsersPageProps = {
  users: UserData[];
};

export const getServerSideProps: GetServerSideProps<UsersPageProps> = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  let currentPage = 0;
  if (Number(query.page) >= 0) currentPage = Number(query.page);
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
