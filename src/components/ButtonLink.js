import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { buttonStyles } from '../utilities';

function ButtonLinkBase({ className, children, href, isInternal, isAnchor }) {
  if (isInternal) {
    return (
      <Link className={className} to={href}>
        {children}
      </Link>
    );
  }
  if (isAnchor) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export const ButtonLink = styled(ButtonLinkBase)`
  ${buttonStyles}
`;
