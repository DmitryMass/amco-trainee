import React, { FC } from 'react';
import clsx from 'clsx';

type PreviewProps = {
  scroll: () => void;
};

export const Preview: FC<PreviewProps> = ({ scroll }) => {
  return (
    <div className=' bg-[url(../public/images/black-bgc.png)] bg-center bg-fixed'>
      <div
        className={clsx(
          'w-full relative min-h-previewCalc font-contrail overflow-hidden pt-[20px]  flex justify-between items-center max-w-[1520px] mx-auto',
          'after:bg-[url(../public/images/rectangle.png)] after:bg-contain after:bg-no-repeat after:h-full after:w-full after:content-normal after:absolute after:top-0 after:left-0'
        )}
      >
        <img
          className='absolute max-w-full h-full max-[576px]:opacity-70'
          src={'/images/woman.png'}
          alt='woman'
        />
        <div
          className={clsx(
            'relative max-w-[256px] text-white px-2.5 mx-auto w-full',
            'max-[576px]:max-w-full max-[576px]:ml-14 max-[450px]:ml-2.5'
          )}
        >
          <div className='flex flex-col max-[450px]:gap-6'>
            <span className='text-[70px] font-bold max-[450px]:text-5xl'>
              Shop
            </span>
            <span className='text-[70px] font-bold ml-28 max-[768px]:ml-14 max-[450px]:text-5xl'>
              Explore
            </span>
            <span className='text-[70px] font-bold ml-52 max-[768px]:ml-28 max-[450px]:text-5xl'>
              Discover
            </span>
            <p className='text-2xl'>Find your perfect style</p>
          </div>
        </div>
        <button
          className='absolute cursor-pointer z-[5] bottom-[10px] animate-bounce inset-x-0 w-[30px] h-[30px] mx-auto
        '
          onClick={scroll}
        >
          <img src={'/icons/open_arrow.svg'} alt='arrow' />
        </button>
      </div>
    </div>
  );
};

// 'after:bg-[url(../public/images/woman.png)] after:bg-fixed after:bg-contain after:bg-no-repeat after:h-full after:w-full after:content-normal after:absolute top-0 left-0'
