// @vendors
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

// @components
import MainModal from './modal';
import MainDrawer from './drawer';

const Modal = ({ children, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return <MainDrawer {...props}>{children}</MainDrawer>;
  }

  return (
    <MainModal {...props}>{children}</MainModal>
  );
};

export default Modal;
