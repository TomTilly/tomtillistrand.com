import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import { Button } from './Button';
import Monogram from '../assets/images/monogram.inline.svg';

const Header = styled.header`
  display: flex;
  align-items: center;
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

  li + li {
    margin-left: 3em;
  }

  a:not(.logo)::after {
    content: '';
    width: 0;
    height: 3px;
    display: block;
    background-color: var(--primary);
    transition: width 0.2s linear;
  }

  [aria-current='page']:not(.logo)::after {
    content: '';
    width: 100%;
  }

  a:not(.logo):hover::after {
    width: 100%;
  }

  .logo {
    font-size: 2.9rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.4em;
    }

    &__text {
      font-weight: bold;
      font-family: var(--heading-font);
    }
  }
`;

export default function Nav() {
  return (
    <Header>
      <NavStyles>
        <ul>
          <li>
            <Link to="/" className="logo">
              <Monogram />
              <span className="logo__text">Tom Tillistrand</span>
            </Link>
          </li>
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
      <CtaButton as="a" href="#hire-me">
        Let's work together
      </CtaButton>
      <DarkModeToggle />
    </Header>
  );
}
