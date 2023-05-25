export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  height: number;
  weight: number;
};

export type TablePageProps = {
  users: UserData[];
};

export type SortOrder = 'asc' | 'desc';
export type SortByCategory = 'id' | 'Name' | 'Age' | 'Weight' | 'Height' | null;
