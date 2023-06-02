import React, { FC } from 'react';
import { SocialMedia } from './store/SocialMedia';
import { PayMethods } from './store/PayMethods';
import { Contact } from './store/Contact';

export const Footer: FC = () => {
  return (
    <footer className='w-full font-contrail'>
      <section className='w-full bg-[url(../public/images/black-bgc.png)] bg-center pt-5'>
        <div className='max-w-[1320px] mx-auto px-[15px] flex justify-between pb-4 max-[576px]:flex-col max-[576px]:gap-8'>
          <div className='flex justify-between max-w-[50%] w-full max-[768px]:flex-col max-[768px]:justify-normal gap-6'>
            <SocialMedia />
            <Contact />
          </div>
          <div className='flex flex-col justify-center gap-4'>
            <PayMethods />
            <div className='flex items-center ml-[-20px]'>
              <img
                className='saturate-50'
                src={'/icons/jimmy-logo.svg'}
                alt={'company logo'}
                width={100}
                height={100}
              />
              <p className='text-lightGray  text-center'>
                We will deliver <br /> on time
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#000000e8]'>
        <div className='py-2.5 px-[15px] max-w-[1320px] mx-auto w-full flex items-center justify-between'>
          <span className='text-white text-xs'>
            &#169; {new Date().getFullYear()} Jimmy-Co Shop
          </span>
          <h2 className='text-white text-xs '>All rights reserved</h2>
        </div>
      </section>
    </footer>
  );
};
