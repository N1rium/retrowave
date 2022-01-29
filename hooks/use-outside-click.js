import { useEffect, useState } from 'react';

const useOutsideClick = (ref) => {
  const [clicked, setClicked] = useState(null);

  const clickListener = (e) => {
    setClicked(ref.current && !ref.current.contains(e.target));
  };

  useEffect(() => {
    document.addEventListener('click', clickListener);
    return () => {
      document.removeEventListener('click', clickListener);
    };
  }, [ref]);

  return clicked;
};

export default useOutsideClick;
