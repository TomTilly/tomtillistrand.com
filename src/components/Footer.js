import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './Logo';
import Container from './Container';
import SocialLinks from './SocialLinks';
import Grid from './Grid';

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

const FooterNav = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  li + li {
    margin-left: 3rem;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    opacity: 0.8;
    text-decoration: underline;
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
          <FooterNav>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
            {/* <li>
              <StyledLink to="/articles">Articles</StyledLink>
            </li>
            <li>
              <StyledLink to="/snippets">Snippets</StyledLink>
            </li> */}
          </FooterNav>
          <StyledSocialLinks />
          <p>&copy; 2021 Tom Tillistrand</p>
        </Wrapper>
      </Container>
    </FooterStyles>
  );
}
