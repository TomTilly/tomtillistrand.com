import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './Logo';
import Container from './Container';
import SocialLinks from './SocialLinks';

const FooterStyles = styled.footer`
  background-color: #36394d;
  padding: 5rem 0;
  color: var(--white);
`;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const StyledSocialLinks = styled(SocialLinks)`
  margin-top: 1.5rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
  place-items: center;

  & > * {
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <Container>
        <Wrapper>
          <HomeLink to="/" aria-label="Link to homepage">
            <Logo color="var(--white)" />
          </HomeLink>
          <StyledSocialLinks />
          <p>&copy; 2021 Tom Tillistrand</p>
        </Wrapper>
      </Container>
    </FooterStyles>
  );
}
