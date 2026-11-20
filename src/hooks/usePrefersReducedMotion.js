// @vendors
import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

// Returns null until the visitor's setting has been read (always null during server rendering)
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};
