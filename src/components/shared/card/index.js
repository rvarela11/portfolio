// @vendors
import React from 'react';

export const Card = ({
  children,
  className = '',
}) => (
  <div {...className && { className }}>
    {children}
  </div>
);

export * from './card-content';
