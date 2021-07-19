import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';
import { wideContainerStyles, above, buttonStyles, below } from '../utilities';

const HeaderContainer = styled.div`
  ${wideContainerStyles};
  display: flex;
  align-items: center;
  position: relative;
`;

const Header = styled.header`
  padding: 2rem 0;
  /* position: sticky;
  top: 0;
  background-color: transparent;
  transition: background-color 0.2s linear; */

  ${above.large`
    padding: 5rem 0 1rem;
  `}
`;

const CtaButton = styled(Link)`
  margin-right: 1em;
  ${buttonStyles}
  display: none;

  ${above.large`
    display: unset;
  `}
`;

const LogoStyles = styled(Logo)`
  margin-right: auto;
`;

export default function Nav({ isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (typeof window !== 'undefined') {
    if (isMenuOpen) {
      window.document.documentElement.style.setProperty('overflow', 'hidden');
    } else {
      window.document.documentElement.style.setProperty('overflow', 'auto');
    }
  }

  return (
    <Header>
      <HeaderContainer>
        {isHome ? <LogoStyles CustomTag="h1" /> : <LogoStyles />}
        <DarkModeToggle />
      </HeaderContainer>
    </Header>
  );
}
