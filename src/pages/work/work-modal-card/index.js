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
      height={1207}
      src={images?.site || ''}
      width={2180}
    />
  </div>
);

export default WorkModalCard;
