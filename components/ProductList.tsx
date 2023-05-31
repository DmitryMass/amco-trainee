import React, { FC } from 'react';
import { Products } from '../types';
import { ProductItem } from './ProductItem';

export const ProductList: FC<Products> = ({ products }) => {
  if (!products) {
    return <div>Error fetching products</div>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
};
