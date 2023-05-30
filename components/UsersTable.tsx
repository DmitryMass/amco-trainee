import React, { FC } from 'react';
import type { SortByCategory, SortOrder, UserData } from '../types';
import { useRouter } from 'next/router';

const tableTitle = ['id', 'Name', 'Age', 'Weight', 'Height'];

type UsersTableProps = {
  users: UserData[];
};

const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const router = useRouter();
  const { sortBy, sortOrder = 'asc' } = router.query;
  const handleHeaderClick = (sortByHeader: SortByCategory) => {
    const newSortOrder: SortOrder =
      sortByHeader === sortBy && sortOrder === 'asc' ? 'desc' : 'asc';
    router.push(`/table?sortBy=${sortByHeader}&sortOrder=${newSortOrder}`);
  };

  if (!users || !users.length) {
    return null;
  }

  return (
    <>
      <table className='table-auto max-w-[540px] mx-auto w-full px-[10px] py-[30px] bg-gray-200'>
        <thead>
          <tr>
            {tableTitle.map((category) => (
              <th
                className='border border-gray-700 cursor-pointer hover:bg-gray-400 transition-all duration-150'
                key={category}
                onClick={() => handleHeaderClick(category as SortByCategory)}
              >
                {category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className='border border-gray-700'>{user.id}</td>
              <td className='border border-gray-700'>{user.firstName}</td>
              <td className='border border-gray-700'>{user.age}</td>
              <td className='border border-gray-700'>{user.weight}</td>
              <td className='border border-gray-700'>{user.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
