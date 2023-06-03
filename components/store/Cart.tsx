import React, { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import { useCartContext } from '../../hooks/useCartContext';
import clsx from 'clsx';
import { QuantityCounter } from './QuantityCounter';
import { CartItem } from './CartItem';

export const Cart: FC = () => {
  const { cartItems, clearCart } = useCartContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const quantityCount = useMemo(
    () =>
      cartItems.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0),
    [cartItems]
  );

  const cartPrice = useMemo(
    () =>
      cartItems.reduce((prev, curr) => {
        return prev + curr.price * curr.quantity;
      }, 0),
    [cartItems]
  );

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='relative block pr-2.5'
      >
        <Image
          src={'/icons/basket.svg'}
          alt={'shopping cart'}
          width={25}
          height={25}
        />
        <QuantityCounter count={quantityCount} />
      </button>
      <div
        className={clsx(
          'max-w-[400px] w-full max-sm:max-w-full h-full font-contrail bg-black text-white fixed top-0 right-0 transition-all duration-200 bg-[url(../public/images/black-bgc.png)] bg-center py-2.5 px-5 border-l-[#9696969c] border-l-[1px] z-20',
          isOpen ? 'visible translate-x-0' : 'invisible  translate-x-[100%]'
        )}
      >
        <div className='flex justify-between items-center'>
          <h3 className='text-white text-lg uppercase'>Your personal cart</h3>
          <button
            className='w-[30px] block mix-blend-plus-lighter invert hover:invert-0 transition-all duration-100 mb-1'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Image
              src={'/icons/close-logo.svg'}
              alt={'close cart'}
              width={30}
              height={30}
            />
          </button>
        </div>
        {cartItems?.length ? (
          <>
            <button
              className='bg-gray-300 text-black w-full hover:bg-white max-w-[200px] block'
              onClick={() => clearCart()}
            >
              Clear cart
            </button>
            <div className='flex flex-col min-h-[90vh] pt-2.5'>
              <div>
                <div className='h-[70vh] overflow-auto'>
                  <div className='grid grid-cols-1 gap-4'>
                    {cartItems.map((item) => (
                      <CartItem key={item.id} cartItem={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className='mt-auto mb-2.5'>
                <div className='mb-5 flex justify-betwee flex-col'>
                  <span className='self-end mb-1'>
                    Total price:{' '}
                    <span className='ml-1.5 text-lg font-medium'>
                      ${new Intl.NumberFormat().format(cartPrice)}
                    </span>
                  </span>
                  <button className='bg-gray-300 text-black w-full hover:bg-white block'>
                    Order
                  </button>
                </div>
              </div>
            </div>
          </>
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
