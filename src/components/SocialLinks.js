import React from 'react';
import styled from 'styled-components';
import GithubLogo from '../assets/images/github.inline.svg';
import LinkedInLogo from '../assets/images/linkedin.inline.svg';
import TwitterLogo from '../assets/images/twitter.inline.svg';
import YoutubeLogo from '../assets/images/youtube.inline.svg';

const SocialWrapper = styled.div`
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  & + a {
    margin-left: 1.3rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default function SocialLinks({ className }) {
  return (
    <SocialWrapper className={className}>
      <SocialLink
        href="https://github.com/TomTilly"
        target="_blank"
        aria-label="Link to Github Profile"
        rel="noopener noreferrer"
      >
        <GithubLogo />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/tomtillistrand/"
        target="_blank"
        aria-label="Link to LinkedIn Profile"
        rel="noopener noreferrer"
      >
        <LinkedInLogo />
      </SocialLink>
      <SocialLink
        href="https://twitter.com/tomtillistrand"
        target="_blank"
        aria-label="Link to Twitter Profile"
        rel="noopener noreferrer"
      >
        <TwitterLogo />
      </SocialLink>
      <SocialLink
        href="https://www.youtube.com/channel/UCQ9R81vBuCKTgdO1R_haU6A"
        target="_blank"
        aria-label="Link to Youtube Profile"
        rel="noopener noreferrer"
      >
        <YoutubeLogo />
      </SocialLink>
    </SocialWrapper>
  );
}
