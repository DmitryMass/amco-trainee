import React, { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import { useCartContext } from '../../hooks/useCartContext';
import clsx from 'clsx';

export const Cart: FC = () => {
  const { cartItems, removeItem, clearCart } = useCartContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const quantityCount = useMemo(
    () =>
      cartItems.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0),
    [cartItems]
  );

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='relative block pr-[10px]'
      >
        <Image
          src={'/icons/cart.svg'}
          alt={'shopping cart'}
          width={30}
          height={30}
        />
        <div
          className={clsx(
            'flex justify-center items-center bg-green-600 py-[2px] px-[8px] text-white rounded-full absolute top-[-17px] right-[0px] font-semibold text-xs transition-all',
            quantityCount !== 0 ? 'animate-bounce' : ''
          )}
        >
          {quantityCount}
        </div>
      </button>
      <div
        className={clsx(
          'w-6/12 max-[460px]:w-full h-full bg-black text-white fixed top-0 right-0 transition-all duration-200',
          isOpen ? 'visible translate-x-0' : 'invisible  translate-x-[100%]'
        )}
      >
        <button
          className='text-white'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          CLOSE
        </button>
        {cartItems?.length ? (
          <div>
            {cartItems.map((item) => (
              <div onClick={() => removeItem(item.id)} key={item.id}>
                <span>
                  {item.title} {item.quantity}
                </span>
              </div>
            ))}
            <button onClick={() => clearCart()}>CLEAR CART</button>
          </div>
        ) : (
          <div>Your cart is Empty</div>
        )}
      </div>
    </>
  );
};
