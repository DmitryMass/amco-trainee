import { SortByCategory, SortOrder, UserData } from '../types';

export const usersSortFn = {
  id: (a: UserData, b: UserData) => a.id - b.id,
  Age: (a: UserData, b: UserData) => a.age - b.age,
  Height: (a: UserData, b: UserData) => a.height - b.height,
  Weight: (a: UserData, b: UserData) => a.weight - b.weight,
  Name: (a: UserData, b: UserData) => a.firstName.localeCompare(b.firstName),
};

export const sortUsers = (
  users: UserData[],
  sortBy: SortByCategory,
  sortOrder: SortOrder
) => {
  const usersForSort: UserData[] = [...users];
  if (!sortBy) {
    return usersForSort;
  }
  if (usersSortFn[sortBy]) {
    usersForSort.sort(usersSortFn[sortBy]);
  }
  if (sortOrder === 'desc') {
    usersForSort.reverse();
  }
  return usersForSort;
};
