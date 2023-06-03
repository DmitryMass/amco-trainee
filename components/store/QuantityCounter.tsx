import clsx from 'clsx';
import React, { FC } from 'react';

type QuantityCounterProps = {
  count: number;
};

export const QuantityCounter: FC<QuantityCounterProps> = ({ count }) => {
  return (
    <span
      className={clsx(
        'flex justify-center items-center text-xs bg-orange-600 min-w-[15px] min-h-[15px] text-white rounded-full absolute top-[-4px] right-0 font-medium ',
        count !== 0 ? 'animate-bounce' : ''
      )}
    >
      {count}
    </span>
  );
};
