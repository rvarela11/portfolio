// @vendors
import { Box, Modal } from '@mui/material';
import React from 'react';

const MainModal = ({
  children,
  handleModalClose = () => {},
  Modal: { className = '' } = {},
  open = false,
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
