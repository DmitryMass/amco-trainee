import React, { FC } from 'react';
import type { CartItem as CartItemType } from '../../types';
import Image from 'next/image';
import { useCartContext } from './CartProvider';

type CartItemProps = {
  cartItem: CartItemType;
};

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { removeItem, cartItems, addToCart } = useCartContext();
  const quantity = cartItems.find((item) => item.id === cartItem.id);

  return (
    <div className='w-[99%] relative mr-auto py-2.5 pl-2.5 pr-7 bg-gray-200 flex gap-4 items-center shadow-sm rounded-sm shadow-white'>
      <button
        className='absolute top-1.5 right-1.5'
        onClick={() => removeItem(cartItem.id, true)}
      >
        <Image
          src={'/icons/delete-logo.svg'}
          width={20}
          height={20}
          alt={'delete'}
        />
      </button>
      <div className='max-w-[80px] max-h-[130px] h-full max-sm:max-h-[100px]'>
        <img
          className='aspect-square w-full object-contain mix-blend-multiply '
          src={cartItem.image}
          alt='cartItem-img'
        />
      </div>
      <div className='grow'>
        <h3 className='text-black text-sm mb-1 pointer-events-none'>
          {cartItem.title}
        </h3>
        <div className='flex flex-col gap-2'>
          <span className='text-blue-700 font-medium text-lg pointer-events-none'>
            ${cartItem.price}
          </span>
          <div className='text-black text-xs flex items-center gap-4'>
            <span className='pointer-events-none'>Quantity:</span>{' '}
            <div className='flex items-center gap-2 border-[1px] border-gray-400'>
              <button
                onClick={() => removeItem(cartItem.id)}
                className='text-xs text-black w-[30px] h-[20px] flex items-center justify-center border-l-[1px] border-gray-400 hover:bg-gray-400'
              >
                -
              </button>
              <span className='text-xs pointer-events-none block w-4/12 text-center'>
                {quantity?.quantity}
              </span>
              <button
                onClick={() => addToCart(cartItem)}
                className='text-xs text-black w-[30px] h-[20px] flex items-center justify-center border-r-[1px] border-gray-400 hover:bg-gray-400'
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//
