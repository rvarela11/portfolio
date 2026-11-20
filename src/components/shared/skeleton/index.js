// @vendors
import { Skeleton as MUISkeleton } from '@mui/material';
import React from 'react';

const Skeleton = ({
  children,
  loading,
  ...props
}) => {
  if (!loading && !!children) {
    return children;
  }

  return (
    <MUISkeleton {...props} style={{ maxWidth: '100%', transform: 'inherit' }}>
      {children}
    </MUISkeleton>
  );
};

export default Skeleton;
