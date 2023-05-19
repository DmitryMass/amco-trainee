import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
//
import type { UserData } from '@/types/userTypes';

export const SearchPanel: FC = () => {
  const [query, setQuery] = useState('');
  const [foundUsers, setFoundUsers] = useState<UserData[]>([]);

  const searchHandler = async () => {
    if (query.trim() && query.length > 1) {
      const res = await fetch(
        `https://dummyjson.com/users/search?q=${query.trim()}`
      );
      const results = await res.json();
      setFoundUsers(results.users);
    } else {
      setFoundUsers([]);
    }
  };

  useEffect(() => {
    searchHandler();
  }, [query]);

  return (
    <div className='mb-[40px] max-w-[250px] w-full mx-auto relative'>
      <label
        className='flex w-full flex-col gap-[5px] font-medium text-[14px]'
        htmlFor='search'
      >
        User Finder
        <input
          className='w-full rounded-md px-[10px] py-[5px] outline-none focus:shadow-md'
          id='search'
          type='text'
          placeholder='Search users'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      {foundUsers.length > 0 && (
        <div className='absolute top-[60px] left-0 w-full shadow-md bg-white block rounded-md border-[1px] border-gray-500 max-h-[250px] overflow-auto'>
          {foundUsers.map((user) => (
            <Link
              key={user.id}
              className='block hover:bg-gray-200 px-[5px] py-[3px]'
              href={`/users/${user.id}`}
            >
              {user.firstName}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
