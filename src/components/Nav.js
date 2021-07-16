import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import DarkModeToggle from './DarkModeToggle';
import Monogram from '../assets/images/monogram.inline.svg';
import { wideContainerStyles, above, buttonStyles, below } from '../utilities';

const HamburgerContainer = ({ className, isMenuOpen, setIsMenuOpen }) => (
  <div className={className}>
    <Hamburger direction="left" toggled={isMenuOpen} toggle={setIsMenuOpen} />
  </div>
);

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

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    svg {
      margin-right: 1.5rem;
      flex-shrink: 0;
    }

    &__text {
      display: none;
      font-size: 2.9rem;
      font-weight: bold;
      font-family: var(--heading-font);
      flex-shrink: 0;
      margin-bottom: 0;

      ${above.small`
        display: block;
      `}
    }
  }
`;

const StyledHamburger = styled(HamburgerContainer)`
  margin-left: auto;
  z-index: 10;
  color: inherit;

  ${above.large`
    display: none;
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

const NavStyles = styled.nav`
  flex-grow: 1;
  display: flex;
  align-items: center;

  ${above.large`
    display: unset;
    margin-right: auto;
  `}

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${above.large`
      flex-direction: row;
    `}
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    font-size: 3rem;

    ${above.large`
      font-size: inherit;
    `}
  }

  li {
    margin: 0 0 1.25rem 0;
    ${above.large`
      margin: 0 0 0 5rem;
    `}
  }

  a::after {
    content: '';
    width: 0;
    height: 3px;
    border-radius: 3px;
    display: block;
    background-color: var(--primary);
    transition: width 0.15s linear;
    margin-top: -3px;
  }

  [aria-current='page']::after {
    content: '';
    width: 100%;
  }

  a:hover::after {
    width: 100%;
  }
`;

// Menu contains the nav, CtaButton (if rendered), and DarkModeToggle. Used to group items for mobile nav
const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--menu-bg);
  padding: 5rem;
  backdrop-filter: blur(7px);
  z-index: 3;
  clip-path: circle(0px at top right);
  transition: clip-path ease-in-out 400ms;

  ${({ isMenuOpen }) =>
    isMenuOpen ? 'clip-path: circle(250% at top right);' : ''}

  ${above.large`
    flex-grow: 1;
    clip-path: none;
    position: static;
    padding: 0;
    transform: none;
    background: none;
    width: auto;
    flex-direction: row;
  `};
`;

const LogoText = ({ children, isHome, ...props }) =>
  isHome ? <h1 {...props}>{children}</h1> : <span {...props}>{children}</span>;

export default function Nav({ isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (isMenuOpen) {
    document.documentElement.style.setProperty('overflow', 'hidden');
  } else {
    document.documentElement.style.setProperty('overflow', 'auto');
  }

  return (
    <Header>
      <HeaderContainer>
        <Link to="/" className="logo" aria-label="Link to homepage">
          <Monogram />
          <LogoText className="logo__text" isHome={isHome}>
            Tom Tillistrand
          </LogoText>
        </Link>
        <Menu isMenuOpen={isMenuOpen}>
          <NavStyles isMenuOpen={isMenuOpen}>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/snippets">Snippets</Link>
              </li>
            </ul>
          </NavStyles>
          {isHome && <CtaButton to="#hire-me">Let's work together</CtaButton>}
          <DarkModeToggle />
        </Menu>
        <StyledHamburger
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </HeaderContainer>
    </Header>
  );
}
