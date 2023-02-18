// @vendors
import React, { useState } from 'react';
import NextImage from 'next/legacy/image';

// @components
import Skeleton from '@/src/components/shared/skeleton';

const Image = ({
  alt = '',
  className = '',
  height = 0,
  quality = 100,
  src = '',
  width = 0,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <Skeleton loading={loading}>
      <NextImage
        alt={alt}
        className={className}
        height={height}
        onLoadingComplete={() => setLoading(false)}
        quality={quality}
        src={src}
        width={width}
      />
    </Skeleton>
  );
};

export default Image;
