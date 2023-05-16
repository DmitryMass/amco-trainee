import React from 'react';
import { GetServerSidePropsContext } from 'next';
//
import { Pagination } from '@/components/Pagination';
import { UsersList } from '@/components/UsersList';
import { SearchPanel } from '@/components/SearchPanel';
//
import { UserService } from '@/services/userService';
import { TUserProps } from '@/types/userTypes';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  let currentPage = 0;
  if (Number(query.page) >= 0) currentPage = Number(query.page);
  const skip = (currentPage - 1) * 10;

  const users = await UserService.getUsers(skip);

  if (!users) {
    return {
      notFound: true,
    };
  }
  return {
    props: { users },
  };
};

const Users = ({ users }: TUserProps) => {
  return (
    <div className='px-[10px] py-[30px] bg-gray-200'>
      <SearchPanel />
      <UsersList users={users} />
      <Pagination />
    </div>
  );
};

export default Users;
