import React, { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import { useCartContext } from '../../hooks/useCartContext';
import clsx from 'clsx';
import closeLogo from '../../public/icons/close-logo.svg';
import cartLogo from '../../public/icons/basket.svg';
import { QuantityCounter } from './QuantityCounter';

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
        className='relative block pr-2.5'
      >
        <Image src={cartLogo} alt={'shopping cart'} width={25} height={25} />
        <QuantityCounter count={quantityCount} />
      </button>
      <div
        className={clsx(
          'w-6/12 max-[460px]:w-full h-full bg-black text-white fixed top-0 right-0 transition-all duration-200 bg-[url(../public/images/black-bgc.png)] bg-center p-2.5 border-l-4 border-opacity-40 border-white ',
          isOpen ? 'visible translate-x-0' : 'invisible  translate-x-[100%]'
        )}
      >
        <button
          className='w-[30px] block ml-auto mix-blend-plus-lighter invert hover:invert-0 transition-all duration-100 mb-5'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image src={closeLogo} alt={'shopping cart'} width={30} height={30} />
        </button>
        {cartItems?.length ? (
          <div>
            <h3 className='text-lightGray'>Personal cart</h3>
            {cartItems.map((item) => (
              <div onClick={() => removeItem(item.id)} key={item.id}>
                <span>
                  {item.title} {item.quantity}
                </span>
              </div>
            ))}
            <button onClick={() => clearCart()}>Clear cart</button>
          </div>
        ) : (
          <div className='flex h-full justify-center items-center'>
            <h2 className='text-lightGray text-lg uppercase'>
              Your cart is Empty
            </h2>
          </div>
        )}
      </div>
    </>
  );
};
