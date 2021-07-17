import React from 'react';
import Nav from '../components/Nav';
import HeaderWrapper from '../components/HeaderWrapper';
import Container from '../components/Container';

export default function About() {
  return (
    <>
      <HeaderWrapper>
        <Nav />
        <Container>
          <h1>About Tom Tillistrand</h1>
        </Container>
      </HeaderWrapper>
    </>
  );
}
