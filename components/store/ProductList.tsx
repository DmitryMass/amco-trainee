import React, { FC } from 'react';
import { Products } from '../../types';
import { ProductItem } from './ProductItem';

export const ProductList: FC<Products> = ({ products }) => {
  if (!products) {
    return <div>Error fetching products</div>;
  }
  return (
    <div className='grid grid-cols-5 max-[992px]:grid-cols-4 max-[768px]:grid-cols-3 max-[576px]:grid-cols-1 justify-items-center gap-2 py-[20px]'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
