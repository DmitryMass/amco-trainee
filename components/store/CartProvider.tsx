import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { CartItem, Product } from '../../types';

type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextProps = {
  cartItems: CartItem[];
  addToCart: (product: Product | CartItem) => void;
  removeItem: (id: number, del?: boolean) => void;
  clearCart: () => void;
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

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product: Product | CartItem) => {
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
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const removeItem = (id: number, del: boolean = false) => {
    const currProduct = cartItems.find((item) => item.id === id);
    if (del) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      if (updatedCartItems.length === 0) {
        clearCart();
        return;
      } else {
        setCartItems(updatedCartItems);
        return;
      }
    }
    if (currProduct) {
      if (currProduct.quantity > 1) {
        const updatedCartItems = cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCartItems);
      } else {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        if (updatedCartItems.length === 0) {
          clearCart();
        } else {
          setCartItems(updatedCartItems);
        }
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, clearCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('Cart context is not provided');
  }
  return ctx;
};
