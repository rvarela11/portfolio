// @vendors
import { useEffect, useRef, useState } from 'react';

// @hooks
import { usePrefersReducedMotion } from '@/src/hooks/usePrefersReducedMotion';

const SPUTTER_DURATION_MS = 800;
const SPUTTER_MAX_GAP_MS = 12000;
const SPUTTER_MIN_GAP_MS = 6000;

// Sputters the sign every 6–12s while it's on screen, not paused, and motion isn't reduced
export const useNeonSputter = () => {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isInView, setIsInView] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isSputtering, setIsSputtering] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting));
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion !== false || isPaused || !isInView) {
      return undefined;
    }

    let gapTimer;
    let sputterTimer;

    const schedule = () => {
      const gap = SPUTTER_MIN_GAP_MS + Math.random() * (SPUTTER_MAX_GAP_MS - SPUTTER_MIN_GAP_MS);
      gapTimer = setTimeout(() => {
        setIsSputtering(true);
        sputterTimer = setTimeout(() => {
          setIsSputtering(false);
          schedule();
        }, SPUTTER_DURATION_MS);
      }, gap);
    };

    schedule();

    return () => {
      clearTimeout(gapTimer);
      clearTimeout(sputterTimer);
      setIsSputtering(false);
    };
  }, [isInView, isPaused, prefersReducedMotion]);

  return { isPaused, isSputtering, ref, setIsPaused };
};
