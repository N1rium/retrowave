import { useEffect, useState } from 'react';

export default function useInterval(callback, delay = 500) {
  const [index, setIndex] = useState(0);

  const increment = () => setIndex((i) => i + 1);

  useEffect(() => {
    const interval = setInterval(increment, delay);
    return () => {
      clearInterval(interval);
    };
  }, [callback]);

  return index;
}
