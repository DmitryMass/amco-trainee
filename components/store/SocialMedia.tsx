import React, { FC } from 'react';
import { socialMediaLinks } from '../../utils/footerUtils';

export const SocialMedia: FC = () => {
  return (
    <div>
      <h3 className='text-lightGray text-lg mb-[10px] uppercase'>
        Social media
      </h3>
      <div className='flex items-center gap-4'>
        {socialMediaLinks.map(({ logo, link, name }) => (
          <a
            className='block w-[25px] h-[25px] mix-blend-plus-lighter invert hover:scale-[1.1] transition-all duration-100'
            key={name}
            href={link}
          >
            <img src={logo} alt={name} />
          </a>
        ))}
      </div>
    </div>
  );
};
