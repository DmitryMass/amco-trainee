import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import type { Products } from '../../types';
import { ProductList } from '../../components/ProductList';

export const getServerSideProps: GetServerSideProps<Products> = async ({
  query,
}) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products?limit=${query.limit ? query.limit : 8}`
    );

    if (!res.ok) {
      throw new Error(`Request products failed with status ${res.status}`);
    }
    const products = await res.json();
    return {
      props: { products },
    };
  } catch (err) {
    return {
      props: { products: null },
    };
  }
};

const Store: FC<Products> = ({ products }) => {
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Store;
