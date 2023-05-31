import React, { FC } from 'react';
import type { Product } from '../types';

type ProductItemProps = {
  product: Product;
};

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return <div>{product.title}</div>;
};
