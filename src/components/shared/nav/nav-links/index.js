// @vendors
import { Link as MUILink } from '@mui/material';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

// @utils
import { SOCIAL_ICONS } from '@/src/utils/icons';
import { RESUME_LINK, SOCIAL_LINKS } from '@/src/utils/links';
import { ROUTES } from '@/src/utils/routes';

const NavLinks = ({ className = '' }) => {
  const router = useRouter();

  return (
    <>
      {
        Object.entries(ROUTES).map(([label, route]) => (
          <Link
            aria-label={`${label} route`}
            className={classnames(`nav__link ${className}`.trim(), {
              'nav__link--selected': router.pathname === route,
            })}
            color='inherit'
            href={route}
            key={route}
          >
            {label}
          </Link>
        ))
      }
      <MUILink
        aria-label='Download resume'
        className={`nav__link ${className}`.trim()}
        color='inherit'
        download
        href={RESUME_LINK}
        underline='none'
      >
        Resume
      </MUILink>
      {
        Object.entries(SOCIAL_LINKS).map(([label, link]) => (
          <MUILink
            aria-label={`${label} link`}
            className={`nav__link ${className}`.trim()}
            color='inherit'
            href={link}
            key={link}
            rel='noreferrer'
            target='_blank'
          >
            {SOCIAL_ICONS[label]}
          </MUILink>
        ))
      }
    </>
  );
};

export default NavLinks;
