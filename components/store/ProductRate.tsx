import Image from 'next/image';
import React, { FC } from 'react';

type ProductRateProps = {
  rating: {
    rate: number;
    count: number;
  };
};

export const ProductRate: FC<ProductRateProps> = ({ rating }) => {
  return (
    <div className='flex items-center gap-2.5 py-[5px] ml-[10px]'>
      <div className='flex items-center gap-x-0.5'>
        {Array.from({ length: Math.floor(rating.rate) }).map((_, index) => (
          <Image
            key={index}
            src={'/icons/rate-star.svg'}
            width={15}
            height={15}
            alt='rate-stars'
          />
        ))}
      </div>
      <div className='flex items-center gap-1.5'>
        <span className='text-xs text-white mt-[5px]'>{rating.count}</span>
        <Image
          className='hover:animate-pulse cursor-pointer'
          src={'/icons/like.svg'}
          width={20}
          height={20}
          alt='likes'
        />
      </div>
    </div>
  );
};
