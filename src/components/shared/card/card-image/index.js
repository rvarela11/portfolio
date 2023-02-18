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
    blurDataURL='/images/image-blur.png'
    className={className}
    placeholder='blur'
    quality={100}
    src={src}
    width={width}
    height={height}
  />
);
