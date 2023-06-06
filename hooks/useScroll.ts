import { useRef } from 'react';

export const useSroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (targetRef.current)
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return {
    targetRef,
    handleClick,
  };
};
