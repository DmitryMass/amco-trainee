import Link from 'next/link';
import React, { FC } from 'react';

type LinkButtonProps = {
  text: string;
  link: string;
};

export const LinkButton: FC<LinkButtonProps> = ({ link, text }) => {
  return (
    <Link
      href={link}
      className='bg-black uppercase text-sm text-white py-0.5 px-1.5 animate-pulse hover:animate-none'
    >
      {text}
    </Link>
  );
};
