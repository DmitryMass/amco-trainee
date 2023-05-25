import { UserData } from '../types';

export const usersSortFn = {
  id: (a: UserData, b: UserData) => a.id - b.id,
  Age: (a: UserData, b: UserData) => a.age - b.age,
  Height: (a: UserData, b: UserData) => a.height - b.height,
  Weight: (a: UserData, b: UserData) => a.weight - b.weight,
  Name: (a: UserData, b: UserData) => a.firstName.localeCompare(b.firstName),
};
