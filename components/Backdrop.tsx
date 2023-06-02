import React, { FC, useEffect, useState } from 'react';

export const Backdrop: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleBackdropClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledHeight = window.scrollY;
      const viewportHeight = window.innerHeight;
      setVisible(scrolledHeight >= viewportHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {visible ? (
        <button
          className='fixed bottom-5 right-5 w-9 h-9 bg-gray-700 rounded-full p-[10px] z-20'
          onClick={handleBackdropClick}
        >
          <img
            className='max-w-full h-full'
            src={'/icons/close_arrow.svg'}
            alt='return'
          />
        </button>
      ) : null}
    </>
  );
};
