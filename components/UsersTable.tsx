import React, { FC, useEffect, useState } from 'react';
import type { SortByCategory, SortOrder, UserData } from '../types';
import { useRouter } from 'next/router';
import { useUsersSort } from '../hooks/useUsersSort';

const tableTitle = ['id', 'Name', 'Age', 'Weight', 'Height'];
const orderValues = ['asc', 'desc'];

type UsersTableProps = {
  users: UserData[];
};

const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const [sortBy, setSortBy] = useState<SortByCategory>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortedUsers, setSortedUsers] = useState<UserData[]>(users);
  const { query, push } = useRouter();

  const handleSort = (sortedValue: SortByCategory) => {
    if (sortedValue === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOrder('asc');
      setSortBy(sortedValue);
    }
  };

  useEffect(() => {
    if (query.sortBy && tableTitle.includes(query.sortBy as string)) {
      setSortBy(query.sortBy as SortByCategory);
    }
    if (query.sortOrder && orderValues.includes(query.sortOrder as string)) {
      setSortOrder(query.sortOrder as SortOrder);
    }
  }, [query.sortBy, query.sortOrder]);

  useEffect(() => {
    if (sortBy) {
      const loadTimeout = setTimeout(() => {
        push(`/table?sortBy=${sortBy}&sortOrder=${sortOrder}`);
      }, 300);
      return () => clearTimeout(loadTimeout);
    }
  }, [sortBy, sortOrder, push]);

  const sortedData = useUsersSort({ sortBy, sortOrder, users });
  useEffect(() => {
    setSortedUsers(sortedData);
  }, [sortedData]);

  return (
    <>
      <table className='table-auto max-w-[540px] mx-auto w-full px-[10px] py-[30px] bg-gray-200'>
        <thead>
          <tr>
            {tableTitle.map((category) => (
              <th
                className='border border-gray-700 cursor-pointer hover:bg-gray-400 transition-all duration-150'
                key={category}
                onClick={() => handleSort(category as SortByCategory)}
              >
                {category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedUsers &&
            sortedUsers.map((user) => (
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
