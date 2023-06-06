import React, { FC } from 'react';
import { payLogos } from '../../utils/footerUtils';

export const PayMethods: FC = () => {
  return (
    <div>
      <h3 className='text-lg text-lightGray '>Payment methods</h3>
      <div className='flex items-center gap-4'>
        {payLogos.map(({ payMethod, name }) => (
          <img
            className='mix-blend-plus-lighter invert w-[50px]'
            key={name}
            src={payMethod}
            alt={name}
          />
        ))}
      </div>
    </div>
  );
};
