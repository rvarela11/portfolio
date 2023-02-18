// @vendors
import React from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MainDrawer = ({
  children,
  handleModalClose = () => {},
  open = false,
  Drawer: { className = '' } = {},
}) => (
  <Drawer
    anchor='right'
    className='main-drawer'
    open={open || false}
    ModalProps={{ keepMounted: true }}
  >
    <div className='main-drawer__close'>
      <IconButton
        color='inherit'
        disableRipple
        onClick={handleModalClose}
      >
        <CloseIcon />
      </IconButton>
    </div>
    <Box className={`main-drawer__content ${className}`.trim()}>
      { open && children }
    </Box>
  </Drawer>
);

export default MainDrawer;
