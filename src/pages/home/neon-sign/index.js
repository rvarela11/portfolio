// @vendors
import React from 'react';
import { Title, VisuallyHidden } from '@mantine/core';
import classnames from 'classnames';

// @hooks
import { useNeonSputter } from './hooks/useNeonSputter';

export const NeonSign = ({ children }) => {
  const { isPaused, isSputtering, ref, setIsPaused } = useNeonSputter();

  const handleClick = () => setIsPaused((paused) => !paused);

  return (
    <Title className='neon-sign' order={1} ref={ref}>
      <button
        aria-describedby='neon-sign-hint'
        aria-pressed={isPaused}
        className={classnames('neon-sign__tube', { 'neon-sign__tube--sputtering': isSputtering })}
        onClick={handleClick}
        type='button'
      >
        {children}
      </button>
      <VisuallyHidden id='neon-sign-hint'>Turns the neon flicker off or on</VisuallyHidden>
    </Title>
  );
};
