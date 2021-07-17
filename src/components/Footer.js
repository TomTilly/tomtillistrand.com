import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Container from './Container';

const FooterStyles = styled.footer`
  background-color: #36394d;
  padding: 5rem 0;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <Container>
        <Logo color="var(--white)" />
      </Container>
    </FooterStyles>
  );
}
