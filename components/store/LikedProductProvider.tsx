import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { Product } from '../../types';

type LikedProductProvider = {
  children: React.ReactNode;
};

type LikedProductCtxProps = {
  likedProducts: Product[];
  addLikeProduct: (product: Product) => void;
  clearList: () => void;
};

export const LikedProductContext = createContext<LikedProductCtxProps | null>(
  null
);

export const LikedProductProvider: FC<LikedProductProvider> = ({
  children,
}) => {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const localStorageLikedProducts = localStorage.getItem('likedProducts');
    if (localStorageLikedProducts) {
      setLikedProducts(JSON.parse(localStorageLikedProducts));
    }
  }, []);

  useEffect(() => {
    if (likedProducts.length > 0) {
      localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    }
  }, [likedProducts]);

  const addLikeProduct = (product: Product) => {
    const currProduct = likedProducts.find((item) => item.id === product.id);
    if (currProduct) {
      const updatedCartItems = likedProducts.filter(
        (item) => item.id !== product.id
      );
      if (updatedCartItems.length === 0) {
        clearList();
      } else {
        setLikedProducts(updatedCartItems);
      }
    } else {
      const newItem = [...likedProducts, { ...product }];
      setLikedProducts(newItem);
    }
  };
  const clearList = () => {
    setLikedProducts([]);
    localStorage.removeItem('likedProducts');
  };

  return (
    <LikedProductContext.Provider
      value={{ addLikeProduct, clearList, likedProducts }}
    >
      {children}
    </LikedProductContext.Provider>
  );
};

export const useLikedContext = () => {
  const ctx = useContext(LikedProductContext);
  if (!ctx) {
    throw new Error('Liked context is not provided');
  }
  return ctx;
};
