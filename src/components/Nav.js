import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

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
  );
}
