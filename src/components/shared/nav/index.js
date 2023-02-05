// @vendors
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

// @components
import NavLinks from './nav-links';
import NavMobile from './nav-mobile';

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return <NavMobile />;
  }

  return (
    <nav className='nav'>
      <NavLinks />
    </nav>
  );
};

export default Nav;
