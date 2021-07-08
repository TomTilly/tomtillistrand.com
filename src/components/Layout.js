import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Nav from './Nav';

const Main = styled.main`
  margin-top: 5rem;
`;

export default function Layout({ path, children }) {
  return (
    <>
      <GlobalStyles />
      <Nav isHome={path === '/'} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
