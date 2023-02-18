// @vendors
import React, { useState } from 'react';

// @components
import Page from '@/src/components/shared/page';
import Modal from '@/src/components/shared/modal';
import WorkCard from './work-card';

// @constants
import { PROJECTS } from './constants';

const Work = () => {
  const [work, setWork] = useState({
    isModalOpen: false,
    selected: {},
  });

  const handleModalClose = () => {
    setWork((prevState) => ({
      ...prevState,
      isModalOpen: false,
    }));
  };

  const handleWorkCardClick = (selected = {}) => {
    setWork((prevState) => ({
      ...prevState,
      isModalOpen: true,
      selected,
    }));
  };

  return (
    <Page title='Work'>
      <div className='work-page-grid'>
        { PROJECTS.map((project, index) => (
          <WorkCard key={index} handleWorkCardClick={handleWorkCardClick} {...project} />
        ))}
      </div>
      <Modal
        handleModalClose={handleModalClose}
        open={work.isModalOpen}
        // Modal={{ className: 'scenes-modal' }}
      >
        <div>Howdy</div>
      </Modal>
    </Page>
  );
};

export default Work;
