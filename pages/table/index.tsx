import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import { TablePageProps } from '../../types';
import { getTableUsers } from '../../utils/usersUtils';

const tableTitle = ['id', 'Name', 'Age', 'Weight', 'Height'];

export const getStaticProps: GetStaticProps<TablePageProps> = async () => {
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
  console.log(users);
  return (
    <>
      <table className='table-auto max-w-[540px] mx-auto w-full px-[10px] py-[30px] bg-gray-200'>
        <thead>
          <tr>
            {tableTitle.map((title) => (
              <th
                className='border border-gray-700 cursor-pointer hover:bg-gray-400 transition-all duration-150'
                key={title}
                onClick={() => {}}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-gray-700'>Some Sorted </td>
            <td className='border border-gray-700'>Some Sorted </td>
            <td className='border border-gray-700'>Some Sorted </td>
            <td className='border border-gray-700'>Some Sorted </td>
            <td className='border border-gray-700'>Some Sorted </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
