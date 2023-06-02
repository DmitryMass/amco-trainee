import React, { FC, useEffect, useState } from 'react';
import type { Product } from '../../types';
import { useCartContext } from '../../hooks/useCartContext';
import Image from 'next/image';
import clsx from 'clsx';

type ProductItemProps = {
  product: Product;
};

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { cartItems } = useCartContext();
  const [isDescription, setIsDescription] = useState(false);
  const { addToCart } = useCartContext();
  const isInCart = cartItems.find((item) => item.id === product.id);

  useEffect(() => {
    if (isDescription) {
      let timeout = setTimeout(() => {
        setIsDescription(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isDescription]);

  return (
    <div
      className={clsx(
        'flex flex-col justify-between font-contrail min-h-[200px] w-full bg-white p-2.5 cursor-pointer relative',
        'shadow-[0px_2px_5px__0px_rgba(0,0,0,.15)] hover:shadow-[0px_2px_5px__0px_rgba(0,0,0,.25)]'
      )}
    >
      <div
        className={clsx(
          'w-[20px] h-[17px] flex justify-center ml-auto transition-all duration-150 relative',
          isDescription ? 'scale-[1.2]' : 'scale-100'
        )}
        onClick={() => setIsDescription((prev) => !prev)}
      >
        <Image src={'/icons/product-info.svg'} alt={'shopping cart'} fill />
      </div>
      <div className='flex items-center  justify-between  gap-2.5 mb-4'>
        <h4 className='text-sm text-gray-600 pointer-events-none'>
          {product.title}
        </h4>
        <div className='max-w-[100px] max-h-[130px] h-full'>
          <img
            className='aspect-square w-full object-contain mix-blend-multiply '
            src={product.image}
            alt='product-img'
          />
        </div>
      </div>
      <div className='flex justify-between items-center '>
        <span className='text-lg text-black font-medium pointer-events-none'>
          ${product.price}
        </span>
        <button
          disabled={!!isInCart}
          onClick={() => addToCart(product)}
          className='text-[10px] rounded-md  uppercase bg-black text-white font-medium max-w-[150px] w-full p-1'
        >
          {isInCart ? 'В Корзине' : 'Добавить в корзину'}
        </button>
      </div>
      {isDescription ? (
        <div className='absolute top-full left-0 z-10 w-full text-xs bg-white shadow-[0px_2px_4px__0px_rgba(0,0,0,.25)] p-2.5'>
          {product.description}
        </div>
      ) : null}
    </div>
  );
};
