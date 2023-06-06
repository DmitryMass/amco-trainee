import React, { FC } from 'react';
import { Products } from '../../types';
import { ProductItem } from './ProductItem';

export const ProductList: FC<Products> = ({ products }) => {
  if (!products) {
    return (
      <div className='pb-[20px] font-contrail fond-bold text-lg text-center'>
        Error fetching products. Please try later...
      </div>
    );
  }
  return (
    <div className='grid grid-cols-4 max-[992px]:grid-cols-3 max-[768px]:grid-cols-2 max-[576px]:grid-cols-1 justify-items-center gap-2 pb-5'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
