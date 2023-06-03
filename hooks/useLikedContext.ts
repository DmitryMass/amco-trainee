import { useContext } from 'react';
import { LikedProductContext } from '../components/store/LikedProductProvider';

export const useLikedContext = () => {
  const ctx = useContext(LikedProductContext);
  if (!ctx) {
    throw new Error('Liked context is not provided');
  }
  return ctx;
};
