import { TUser } from '@/types/userTypes';

export const UserService = {
  async getUsers(skipData: number = 0): Promise<TUser[]> {
    const res = await fetch(
      `https://dummyjson.com/users?limit=10&skip=${skipData}`
    );

    const data = await res.json();
    return data.users;
  },
  async getUserData(id: string): Promise<TUser> {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await res.json();
    return data;
  },
};
