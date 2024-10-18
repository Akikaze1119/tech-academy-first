import { useEffect, useState } from 'react';

/**
 * @example
 * import { mediaQuery, useMediaQuery } from '../utils/responsive';
 * const isSp = useMediaQuery(mediaQuery.sp);
 *  */

export const mediaQuery = {
  sp: 'width < 767px',
  pc: '768px <= width',
};

export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`;
  const [match, setMatch] = useState(matchMedia(formattedQuery).matches);

  useEffect(() => {
    const mql = matchMedia(formattedQuery);

    if (mql.media === 'not all' || mql.media === 'invalid') {
      console.error(`useMediaQuery Error: Invalid media query`);
    }

    mql.onchange = (e) => {
      setMatch(e.matches);
    };

    return () => {
      mql.onchange = null;
    };
  }, [formattedQuery, setMatch]);

  return match;
};
