// @vendors
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

// @components
import MainDrawer from './drawer';
import MainModal from './modal';

const Modal = ({ children, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) {
    return <MainDrawer {...props}>{children}</MainDrawer>;
  }

  return (
    <MainModal {...props}>{children}</MainModal>
  );
};

export default Modal;
