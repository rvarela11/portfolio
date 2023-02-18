// @vendors
import React from 'react';
import { Box, Modal } from '@mui/material';

const MainModal = ({
  children,
  handleModalClose = () => {},
  open = false,
  Modal: { className = '' } = {},
}) => (
  <Modal
    closeAfterTransition
    onClose={handleModalClose}
    open={open}
  >
    <Box className={`main-modal ${className}`.trim()}>
      { open && children }
    </Box>
  </Modal>
);

export default MainModal;
