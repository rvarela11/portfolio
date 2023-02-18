// @vendors
import React from 'react';
import Image from 'next/legacy/image';

const WorkModalCard = ({ selected: {
  images = {},
  title = '',
} = {} }) => (
  <div className='work-modal-card__image'>
    <Image
      alt={`${title} project`}
      blurDataURL='/images/image-blur.png'
      placeholder='blur'
      quality={100}
      src={images?.site || ''}
      width={3452}
      height={1912}
    />
  </div>
);

export default WorkModalCard;
