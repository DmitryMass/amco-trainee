import React, { useEffect, useState } from 'react';
import Link from 'next/link';
//
import { TUser } from '@/types/userTypes';

export const SearchPanel = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<TUser[]>([]);

  const searchHandler = async () => {
    const res = await fetch(
      `https://dummyjson.com/users/search?q=${query.trim().toLowerCase()}`
    );
    const results = await res.json();
    setResults(results.users);
  };

  useEffect(() => {
    if (query.length >= 2) searchHandler();
    if (query.length === 0) setResults([]);
  }, [query]);

  return (
    <div className='mb-[40px] max-w-[250px] w-full mx-auto relative'>
      <label
        className='flex w-full flex-col gap-[5px] font-medium text-[14px]'
        htmlFor='search'
      >
        User Finder
        <input
          className='w-full roundend-[6px] px-[10px] py-[5px] outline-none focus:shadow-md rounded-[6px]'
          id='search'
          type='text'
          placeholder='Search users'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      {results.length > 0 && (
        <ul className='absolute top-[60px] left-0 px-[10px] py-[5px]  w-full shadow-md bg-white block rounded-[6px] border-[1px] border-gray-500 p-[20px] max-h-[250px] overflow-auto'>
          {results.map((user) => (
            <li key={user.id}>
              <Link href={`/user/${user.id}`}>{user.firstName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
