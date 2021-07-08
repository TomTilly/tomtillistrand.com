import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import DarkModeToggle from './DarkModeToggle';
import { Button } from './Button';
import Monogram from '../assets/images/monogram.inline.svg';
import { wideContainerStyles, above } from '../utilities';

const HeaderContainer = styled.div`
  ${wideContainerStyles};
  display: flex;
  align-items: center;
`;

const Header = styled.header`
  position: relative;
  margin-top: 3rem;
  padding: 1rem 0;
  /* position: sticky;
  top: 0;
  background-color: var(--body-bg);
  transition: background-color 0.2s linear; */

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--body-text-color);

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

const StyledHamburger = styled(Hamburger)`
  margin-left: auto;
  ${above.large`
    display: none;
  `}
`;

const CtaButton = styled(Button)`
  margin-right: 1em;
`;

const NavStyles = styled.nav`
  margin-right: auto;

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--body-text-color);
    display: block;
  }

  li {
    margin-left: 5rem;
  }

  a::after {
    content: '';
    width: 0;
    height: 3px;
    display: block;
    background-color: var(--primary);
    transition: width 0.2s linear;
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
  top: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;

  ${above.large`
    position: static;
  `}
`;

export default function Nav({ isHome }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Header>
      <HeaderContainer>
        <Link to="/" className="logo">
          <Monogram />
          {isHome ? (
            <h1 className="logo__text">Tom Tillistrand</h1>
          ) : (
            <span className="logo__text">Tom Tillistrand</span>
          )}
        </Link>
        <Menu>
          <NavStyles>
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
          {isHome && (
            <CtaButton as="a" href="#hire-me">
              Let's work together
            </CtaButton>
          )}
          <DarkModeToggle />
        </Menu>
        <StyledHamburger toggled={isOpen} toggle={setOpen} />
      </HeaderContainer>
    </Header>
  );
}
