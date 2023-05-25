import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import type { TablePageProps } from '../../types';
import { getTableUsers } from '../../utils/usersUtils';
import UsersTable from '../../components/UsersTable';

export const getServerSideProps: GetServerSideProps<
  TablePageProps
> = async () => {
  const users = await getTableUsers();

  if (!users) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users },
  };
};

const Table: FC<TablePageProps> = ({ users }) => {
  return (
    <div className='pb-[30px]'>
      <h1 className='text-center mb-[20px]'>Users Sorting Table</h1>
      <UsersTable users={users} />
    </div>
  );
};

export default Table;
