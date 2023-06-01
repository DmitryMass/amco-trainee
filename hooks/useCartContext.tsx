import { useContext } from 'react';
import { CartContext } from '../components/store/CartProvider';

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('Cart context is not provided');
  }
  return ctx;
};
