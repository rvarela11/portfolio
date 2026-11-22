// @vendors
import React from 'react';
import { Modal, VisuallyHidden } from '@mantine/core';

const MainModal = ({
  children,
  handleModalClose = () => {},
  Modal: { className = '' } = {},
  open = false,
  title = '',
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
    size={1090}
    title={title && <VisuallyHidden>{title}</VisuallyHidden>}
  >
    { open && children }
  </Modal>
);

export default MainModal;
