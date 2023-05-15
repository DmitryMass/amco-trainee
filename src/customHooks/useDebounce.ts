import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [debounceString, setDebounceString] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceString(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return { debounceString };
};
