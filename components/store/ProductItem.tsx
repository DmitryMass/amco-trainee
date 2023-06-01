import React, { FC, useState } from 'react';
import type { Product } from '../../types';
import { useCartContext } from '../../hooks/useCartContext';
import clsx from 'clsx';
import { ProductRate } from './ProductRate';

type ProductItemProps = {
  product: Product;
};

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const { addToCart } = useCartContext();

  return (
    <div className='flex flex-col max-w-[240px] font-contrail w-full max-[576px]:max-w-full bg-[#313791] pt-[25px] rounded-md shadow-sm shadow-blue-400'>
      <div className='bg-[#061C52] flex-1 min-h-[300px] relative'>
        <div
          className='bg-[#F99B1D] cursor-pointer max-w-[170px] absolute left-0 bottom-[30%] px-[15px] py-[10px] '
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
        >
          <h3 className='text-base text-white font-medium text-ellipsis grow overflow-hidden whitespace-nowrap'>
            {product.title}
          </h3>
        </div>
        <div
          className={clsx(
            'absolute z-10 bottom-[45%] bg-gray-400  left-0  px-[5px] transition-all duration-150',
            isTooltipVisible ? 'visible opacity-100' : 'invisible opacity-0'
          )}
        >
          <span className='block p-[5px] text-white text-xs font-medium'>
            {product.title}
          </span>
        </div>
        <div className='absolute  bottom-[15%] tracking-wide left-[10px] text-white text-lg font-semibold'>
          ${product.price}
        </div>
        <div
          className={clsx(
            'relative bg-[#ffe3fc] flex max-w-[120px] ml-auto mt-[25px] mr-[25px] max-h-[130px] h-full',
            'after:absolute after:w-[160px] after:h-[160px] after:border-[2px] after:border-pink-500 after:border-opacity-80 after:right-[-15px] after:top-[-15px]',
            'before:absolute before:w-[160px] before:h-[160px] before:border-[2px] before:border-blue-500 before:border-opacity-80 before:right-[-20px] before:top-[-10px]'
          )}
        >
          <img
            className='aspect-[3/2] w-[100%] object-contain mix-blend-multiply '
            src={product.image}
            alt='product-img'
          />
        </div>
        <button
          onClick={() => addToCart(product)}
          className={clsx(
            'absolute  uppercase bg-black text-white bottom-[20px] right-[10px] max-w-[100px] w-full p-[5px]'
          )}
        >
          Shop Now
        </button>
      </div>
      <ProductRate rating={product.rating} />
    </div>
  );
};
