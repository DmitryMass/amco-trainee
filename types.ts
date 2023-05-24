export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  height: string;
  weight: string;
};

export type TablePageProps = {
  users: UserData[];
};
