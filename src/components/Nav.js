import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import { Button } from './Button';

const NavStyles = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
  }

  .logo {
    font-size: 2rem;
  }
`;

export default function Nav() {
  return (
    <header>
      <NavStyles>
        <ul>
          <li className="logo">
            <Link to="/">Tom Tillistrand</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="#hire-me">Hire me</Link>
          </li>
        </ul>
      </NavStyles>
      <Button>Let's work together</Button>
      <DarkModeToggle />
    </header>
  );
}
