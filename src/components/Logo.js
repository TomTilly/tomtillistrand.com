import React from 'react';
import styled from 'styled-components';
import MonogramSVG from '../assets/images/monogram.inline.svg';
import { above } from '../utilities';

const LogoText = ({ children, isHome, ...props }) =>
  isHome ? <h1 {...props}>{children}</h1> : <span {...props}>{children}</span>;

const Monogram = ({ className }) => <MonogramSVG className={className} />;

const LogoStyles = styled.div`
  display: flex;
  align-items: center;
`;

const MonogramStyles = styled(Monogram)`
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const LogoTextStyles = styled(LogoText)`
  display: none;
  font-size: 2.9rem;
  font-weight: bold;
  font-family: var(--heading-font);
  flex-shrink: 0;
  margin-bottom: 0;

  ${above.small`
    display: block;
  `}
`;

export default function Logo({ isHome }) {
  return (
    <LogoStyles>
      <MonogramStyles />
      <LogoTextStyles isHome={isHome}>Tom Tillistrand</LogoTextStyles>
    </LogoStyles>
  );
}
