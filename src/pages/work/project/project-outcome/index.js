// @vendors
import React from 'react';
import { Text, Title } from '@mantine/core';

export const ProjectOutcome = ({ text = '' }) => (
  <section className='project-outcome'>
    <Title className='project-outcome__label' order={2}>Outcome</Title>
    <Text className='project-outcome__text'>{text}</Text>
  </section>
);
