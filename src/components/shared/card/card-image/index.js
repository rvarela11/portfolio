// @vendors
import React from 'react';
import Image from 'next/legacy/image';

export const CardImage = ({
  className = '',
  image: {
    alt = '',
    src = '',
    width = 0,
    height = 0,
  } = {},
}) => (
  <Image
    alt={alt}
    className={className}
    quality={100}
    src={src}
    width={width}
    height={height}
  />
);
