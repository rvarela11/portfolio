// @vendors
import React from 'react';
import { Skeleton as MantineSkeleton } from '@mantine/core';

const Skeleton = ({
  children,
  loading,
  ...props
}) => {
  if (!loading && !!children) {
    return children;
  }

  return (
    <MantineSkeleton className='skeleton' visible {...props}>
      {children}
    </MantineSkeleton>
  );
};

export default Skeleton;
