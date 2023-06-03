import React, { FC } from 'react';
import { useLikedContext } from '../../../hooks/useLikedContext';
import { ProductItem } from '../../../components/store/ProductItem';
import Link from 'next/link';
import { LinkButton } from '../../../components/LinkButton';

const FavoriteList: FC = () => {
  const { likedProducts, clearList } = useLikedContext();
  return (
    <div className='max-w-[1320px] mx-auto px-[15px] py-[30px] font-contrail h-full relative'>
      {likedProducts.length > 0 ? (
        <>
          <div className='flex justify-between items-center mb-2.5'>
            <h1 className='text-lg'>Your favourite products</h1>
            <LinkButton link='/store' text='Back to store' />
          </div>
          <div className='grid grid-cols-3 gap-2 max-md:grid-cols-2 max-sm:grid-cols-1 mb-8'>
            {likedProducts.map((pr) => (
              <ProductItem key={pr.id} product={pr} />
            ))}
          </div>
          <button
            className='bg-black absolute bottom-2.5 left-[15px] max-w-[200px] w-full uppercase text-white text-base py-0.5 px-1.5 animate-pulse hover:animate-none'
            onClick={() => clearList()}
          >
            Clear favorite list
          </button>
        </>
      ) : (
        <div className='flex flex-col gap-4 justify-center items-center h-full'>
          <h2 className='text-lg'>Now your favorite list is Empty</h2>
          <LinkButton link='/store' text='Back to store' />
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
