import React from 'react';
import { GetServerSidePropsContext } from 'next';
//
import { Pagination } from '@/components/Pagination';
import { UsersList } from '@/components/UsersList';
import { SearchPanel } from '@/components/SearchPanel';
//
import { UserService } from '@/services/userService';
import { TUserProps } from '@/types/userTypes';

const Users = ({ users }: TUserProps) => {
  return (
    <div className='px-[10px] py-[30px] bg-gray-200'>
      <SearchPanel />
      <UsersList users={users} />
      <Pagination />
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;

  const TOTAL_PER_PAGE = 10;
  let currentPage = 0;
  if (Number(query.page) >= 0) currentPage = Number(query.page);
  const skip = (currentPage - 1) * TOTAL_PER_PAGE;

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

export default Users;
