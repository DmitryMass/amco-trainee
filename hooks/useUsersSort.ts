import { useEffect, useState } from 'react';
import type { SortByCategory, SortOrder, UserData } from '../types';
import { usersSortFn } from '../utils/usersSort';

type UseUsersSortArg = {
  users: UserData[];
  sortBy: SortByCategory;
  sortOrder: SortOrder;
};

export const useUsersSort = ({
  sortBy,
  sortOrder,
  users,
}: UseUsersSortArg): UserData[] => {
  const [sortedUsers, setSortedUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const usersForSort: UserData[] = [...users];
    if (!sortBy) {
      return setSortedUsers(users);
    }

    if (usersSortFn[sortBy]) {
      usersForSort.sort(usersSortFn[sortBy]);
    }

    if (sortOrder === 'desc') {
      usersForSort.reverse();
    }
    setSortedUsers(usersForSort);
  }, [sortBy, users, sortOrder]);

  return sortedUsers;
};
