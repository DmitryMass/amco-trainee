export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

export type TUserProps = {
  users: TUser[];
};
