// @vendors
import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// @components
import NavLinks from '../nav-links';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  return (
    <nav className='nav nav-mobile'>
      <IconButton
        color='inherit'
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className='nav-mobile__menu'
        anchor='right'
        onClose={handleDrawerClose}
        open={isOpen}
        variant='temporary'
        ModalProps={{ keepMounted: true }}
      >
        <NavLinks className='nav-mobile__link' />
      </Drawer>
    </nav>
  );
};

export default NavMobile;
