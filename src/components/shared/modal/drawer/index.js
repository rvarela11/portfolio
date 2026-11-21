// @vendors
import React from 'react';
import { Box, Drawer } from '@mantine/core';

const MainDrawer = ({
  children,
  Drawer: { className = '' } = {},
  handleModalClose = () => {},
  open = false,
}) => (
  <Drawer
    classNames={{
      body: 'main-drawer__body',
      close: 'main-drawer__close',
      content: 'main-drawer',
      header: 'main-drawer__header',
    }}
    closeButtonProps={{ 'aria-label': 'Close', iconSize: 32, size: 32 }}
    keepMounted
    onClose={handleModalClose}
    opened={open}
    overlayProps={{ backgroundOpacity: 0.5, color: '#000' }}
    position='right'
    size='100%'
  >
    <Box className={`main-drawer__content ${className}`.trim()}>
      { open && children }
    </Box>
  </Drawer>
);

export default MainDrawer;
