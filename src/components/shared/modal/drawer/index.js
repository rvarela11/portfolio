// @vendors
import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, IconButton } from '@mui/material';
import React from 'react';

const MainDrawer = ({
  children,
  Drawer: { className = '' } = {},
  handleModalClose = () => {},
  open = false,
}) => (
  <Drawer
    anchor='right'
    className='main-drawer'
    ModalProps={{ keepMounted: true }}
    open={open || false}
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
