import React, { FC, MouseEventHandler, useRef } from 'react';
import { GetServerSideProps } from 'next';
import type { Products } from '../../types';
import { ProductList } from '../../components/store/ProductList';
import { Preview } from '../../components/store/Preview';
import { useSroll } from '../../hooks/useScroll';

export const getServerSideProps: GetServerSideProps<Products> = async () => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`);

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
  const { handleClick, targetRef } = useSroll();

  return (
    <div>
      <Preview scroll={handleClick} />
      <div
        ref={targetRef}
        className='max-w-[1320px] px-3.5 mx-auto w-full h-full pt-5'
      >
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Store;
