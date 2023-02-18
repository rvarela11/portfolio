// @vendors
import React from 'react';
import Image from 'next/legacy/image';

const WorkModalCard = ({ selected: {
  images = {},
  title = '',
} = {} }) => {
  console.log('');
  return (
    <>
      <div>
        <Image
          alt={`${title} project`}
          quality={100}
          src={images?.site || ''}
          width={3452}
          height={1912}
        />
      </div>
      <div className='work-modal-card__content'>
        Howdy
      </div>
    </>
  );
};

export default WorkModalCard;
