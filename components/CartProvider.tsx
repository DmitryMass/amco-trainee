import React, { FC, createContext, useEffect, useState } from 'react';
import type { CartItem, Product } from '../types';

type CartProviderProps = {
  children: React.ReactNode;
};
type CartContextProps = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeItem: (id: number) => void;
  removeItems: () => void;
};

export const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const localStorageCartItems = localStorage.getItem('cartItems');
    if (localStorageCartItems) {
      setCartItems(JSON.parse(localStorageCartItems));
    }
  }, []);

  const saveCartItemsToLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  const addToCart = (product: Product) => {
    const currProduct = cartItems.find((item) => item.id === product.id);
    if (currProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const newItem = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newItem);
    }
  };

  const removeItems = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const removeItem = (productId: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      saveCartItemsToLocalStorage(cartItems);
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItems, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
