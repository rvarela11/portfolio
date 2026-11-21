// @vendors
import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// @components
import MainDrawer from './drawer';
import MainModal from './modal';

const Modal = ({ children, ...props }) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  if (isMobile) {
    return <MainDrawer {...props}>{children}</MainDrawer>;
  }

  return (
    <MainModal {...props}>{children}</MainModal>
  );
};

export default Modal;
