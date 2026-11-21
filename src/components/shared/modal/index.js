// @vendors
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';

// @components
import MainDrawer from './drawer';
import MainModal from './modal';

const Modal = ({ children, ...props }) => {
  // Same breakpoint as MUI's down('md')
  const isMobile = useMediaQuery('(max-width: 899.95px)');

  if (isMobile) {
    return <MainDrawer {...props}>{children}</MainDrawer>;
  }

  return (
    <MainModal {...props}>{children}</MainModal>
  );
};

export default Modal;
