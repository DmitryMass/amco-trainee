import type { UserData } from '../types';

export const getUsers = async (skipData: number): Promise<UserData[]> => {
  const res = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${skipData}`
  );
  const data = await res.json();
  return data.users;
};

export const getUserData = async (id: string): Promise<UserData> => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();
  return data;
};
