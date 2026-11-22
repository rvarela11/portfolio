// @vendors
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Anchor } from '@mantine/core';
import classnames from 'classnames';

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
            key={route}
            aria-label={`${label} route`}
            className={classnames(`nav__link ${className}`.trim(), {
              'nav__link--selected': router.pathname === route || (route !== ROUTES.home && router.pathname.startsWith(`${route}/`)),
            })}
            color='inherit'
            href={route}
          >
            {label}
          </Link>
        ))
      }
      <Anchor
        aria-label='Download resume'
        className={`nav__link ${className}`.trim()}
        color='inherit'
        download
        href={RESUME_LINK}
        underline='none'
      >
        Resume
      </Anchor>
      {
        Object.entries(SOCIAL_LINKS).map(([label, link]) => (
          <Anchor
            key={link}
            aria-label={`${label} link`}
            className={`nav__link ${className}`.trim()}
            color='inherit'
            href={link}
            rel='noreferrer'
            target='_blank'
          >
            {SOCIAL_ICONS[label]}
          </Anchor>
        ))
      }
    </>
  );
};

export default NavLinks;
