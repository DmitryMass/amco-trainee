import React, { FC } from 'react';

export const Contact: FC = () => {
  return (
    <div>
      <h3 className='text-lightGray text-lg uppercase mb-[10px]'>
        Our contact
      </h3>
      <div className='flex gap-2 items-center'>
        <img
          className='w-[25px] h-[25px] mix-blend-plus-lighter invert'
          src={'/icons/contact-logo.svg'}
          alt='contact'
        />{' '}
        <span className='text-lightGray'>+380505634338</span>
      </div>
    </div>
  );
};
