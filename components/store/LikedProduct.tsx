import Image from 'next/image';
import React, { FC, useMemo } from 'react';
import type { Product } from '../../types';
import clsx from 'clsx';
import { useLikedContext } from '../../hooks/useLikedContext';
import { QuantityCounter } from './QuantityCounter';

type LikedProductProps = {
  product: Product;
};

export const LikedProduct: FC<LikedProductProps> = ({ product }) => {
  const { addLikeProduct, likedProducts } = useLikedContext();
  const isLiked = likedProducts.some(({ id }) => id === product.id);

  return (
    <button
      className={clsx(
        'flex justify-center ml-auto transition-all duration-150 relative hover:bg-gray-200 rounded-full p-[5px]',
        isLiked ? 'bg-gray-200' : 'bg-auto'
      )}
      onClick={() => addLikeProduct(product)}
    >
      <Image
        src={'/icons/like-heart.svg'}
        alt={'shopping cart'}
        width={25}
        height={25}
      />
    </button>
  );
};
