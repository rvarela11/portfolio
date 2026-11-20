// @vendors
import React from 'react';

// @components
import Image from '@/src/components/shared/image';

const WorkModalCard = ({ selected: {
  images = {},
  title = '',
} = {} }) => (
  <div className='work-modal-card__image'>
    <Image
      alt={`${title} project`}
      src={images?.site || ''}
      width={2180}
      height={1207}
    />
  </div>
);

export default WorkModalCard;
