import { useEffect, useState } from 'react';

const defaultOptions = {
  root: undefined,
  rootMargin: '0px',
  threshold: 0,
};

const useIntersectionObserver = (elementRef, options = defaultOptions) => {
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) =>
        entries.forEach((item) => {
          const nextValue = item.isIntersecting;
          setIsVisible(nextValue);
        }),
      options
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect(elementRef.current);
    };
  }, [elementRef]);

  return isVisible;
};

export default useIntersectionObserver;
