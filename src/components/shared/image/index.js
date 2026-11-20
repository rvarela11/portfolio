// @vendors
import NextImage from 'next/image';
import React, { useState } from 'react';

// @components
import Skeleton from '@/src/components/shared/skeleton';

const Image = ({
  alt = '',
  className = '',
  height = 0,
  quality = 75,
  src = '',
  width = 0,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <Skeleton loading={loading}>
      <NextImage
        alt={alt}
        className={`image ${className}`.trim()}
        height={height}
        onLoad={() => setLoading(false)}
        quality={quality}
        src={src}
        width={width}
      />
    </Skeleton>
  );
};

export default Image;
