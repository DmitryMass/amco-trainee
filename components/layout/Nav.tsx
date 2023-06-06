import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Cart } from '../store/Cart';
import { navLinks } from '../../utils/headerUtils';
import Image from 'next/image';
import clsx from 'clsx';
import { QuantityCounter } from '../store/QuantityCounter';
import { useLikedContext } from '../store/LikedProductProvider';

export const Nav: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { likedProducts } = useLikedContext();

  return (
    <div className='flex justify-between items-center py-2.5 max-w-[1320px] px-[15px] mx-auto w-full'>
      <div className='flex items-center gap-2 relative'>
        <button
          className='block relative z-20 bg-black'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Image src={'/icons/burger.svg'} width={25} height={25} alt='menu' />
        </button>
        <div
          className={clsx(
            'absolute left-[10%] overflow-hidden transition-all duration-300',
            'max-sm:fixed max-sm:left-0 max-sm:w-full max-sm:h-screen max-sm:bg-[url(../public/images/black-bgc.png)] max-sm:flex max-sm:justify-center max-sm:z-50 max-sm:top-0',
            isMenuOpen
              ? 'left-0 visible max-sm:top-0'
              : '-left-full invisible max-sm:left-0 max-sm:-top-full'
          )}
        >
          <div
            className={clsx(
              'relative ml-[25px] transition-all duration-300 flex items-center top-0',
              isMenuOpen
                ? 'left-0 visible'
                : '-left-full invisible max-sm:left-0',
              'max-sm:flex-col max-sm:justify-center max-sm:w-full max-sm:h-full max-sm:ml-auto'
            )}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className='text-white sm:hidden absolute top-4 right-4'
            >
              <Image
                className='invert'
                src={'/icons/close-logo.svg'}
                width={30}
                height={30}
                alt={'close logo'}
              />
            </button>
            {navLinks.map(({ link, name }) => (
              <Link
                key={name}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  'text-white px-1.5 py-1 block',
                  'max-sm:max-w-[200px] max-sm:w-full max-sm:bg-white max-sm:py-4 max-sm:text-black max-sm:text-center max-sm:mb-[10px] max-sm:font-contrail max-sm:text-lg max-sm:uppercase'
                )}
                href={link}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <img
          className='w-[120px] ml-auto md:mx-auto mr-5'
          src={'/icons/store-logo.svg'}
          alt='store-logo'
        />
      </div>
      <div className='flex items-center gap-4'>
        <Link className='relative pr-2.5 block' href={'/store/favoritelist'}>
          <Image
            className='invert'
            src={'/icons/like-heart.svg'}
            width={25}
            height={25}
            alt={'myFavoriteProd'}
          />
          <QuantityCounter count={likedProducts.length} />
        </Link>
        <Cart />
      </div>
    </div>
  );
};
