// @vendors
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { Link as MUILink } from '@mui/material';

// @utils
import { SOCIAL_ICONS } from '@/src/utils/icons';
import { SOCIAL_LINKS } from '@/src/utils/links';
import { ROUTES } from '@/src/utils/routes';

const Nav = () => {
  const router = useRouter();

  return (
    <nav className='nav'>
      {
        Object.entries(ROUTES).map(([label, route]) => (
          <Link
            key={route}
            aria-label={`${label} route`}
            className={classnames('nav__link', {
              'nav__link--selected': router.pathname === route,
            })}
            color='inherit'
            href={route}
          >
            {label}
          </Link>
        ))
      }
      {
        Object.entries(SOCIAL_LINKS).map(([label, link]) => (
          <MUILink
            key={link}
            aria-label={`${label} link`}
            className='nav__link'
            color='inherit'
            href={link}
            rel='noreferrer'
            target='_blank'
          >
            {SOCIAL_ICONS[label]}
          </MUILink>
        ))
      }
    </nav>
  );
};

export default Nav;
