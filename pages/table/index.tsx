import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import UsersTable from '../../components/UsersTable';
import { getTableUsers } from '../../utils/usersUtils';
import { sortUsers } from '../../utils/usersSort';
import { SortByCategory } from '../../types';
import type { SortOrder, TablePageProps } from '../../types';

export const getServerSideProps: GetServerSideProps<TablePageProps> = async ({
  query,
}) => {
  const users = await getTableUsers();
  if (!users) {
    return {
      notFound: true,
    };
  }
  const { sortBy, sortOrder = 'asc' } = query;
  const sortedUsers = sortUsers(
    users,
    sortBy as SortByCategory,
    sortOrder as SortOrder
  );

  return {
    props: { users: sortedUsers },
  };
};

const Table: FC<TablePageProps> = ({ users }) => {
  return (
    <div className='py-[30px]'>
      <h1 className='text-center mb-[20px]'>Users Sorting Table</h1>
      <UsersTable users={users} />
    </div>
  );
};

export default Table;
