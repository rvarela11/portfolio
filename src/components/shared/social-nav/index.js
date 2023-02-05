import React from 'react';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SOCIAL_LINKS } from '@/src/utils/links';

const SocialNav = () => (
  <div className='social-nav'>
    <Link
      aria-label='Visit my LinkedIn'
      className='social-nav__link'
      color='inherit'
      href={SOCIAL_LINKS.linkedin}
      rel='noreferrer'
      target='_blank'
      underline='none'
    >
      <LinkedInIcon />
    </Link>
    <Link
      aria-label='Visit my Github'
      className='social-nav__link'
      color='inherit'
      href={SOCIAL_LINKS.github}
      rel='noreferrer'
      target='_blank'
      underline='none'
    >
      <GitHubIcon />
    </Link>
  </div>
);

export default SocialNav;
