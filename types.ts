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

export type Products = {
  products: Product[] | null;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRate;
};
export type ProductRate = {
  rate: number;
  count: number;
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
};
