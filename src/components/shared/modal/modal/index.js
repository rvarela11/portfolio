// @vendors
import React from 'react';
import { Modal } from '@mantine/core';

const MainModal = ({
  children,
  handleModalClose = () => {},
  Modal: { className = '' } = {},
  open = false,
}) => (
  <Modal
    centered
    classNames={{
      body: 'main-modal__body',
      close: 'main-modal__close',
      content: `main-modal ${className}`.trim(),
      header: 'main-modal__header',
    }}
    closeButtonProps={{ 'aria-label': 'Close', iconSize: 32, size: 32 }}
    onClose={handleModalClose}
    opened={open}
    overlayProps={{ backgroundOpacity: 0.5, color: '#000' }}
    size={1090}
  >
    { open && children }
  </Modal>
);

export default MainModal;
