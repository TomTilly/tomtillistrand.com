import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { above, headingStyles, wideContainerStyles } from '../utilities';
import DownArrow from '../assets/images/down-arrow.inline.svg';

// background-image: ${{backgroundImage} => `url(${backgroundImage})`};

const HeroStyles = styled.div`
  ${wideContainerStyles}
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  flex-grow: 1;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;
  padding-bottom: 4rem;

  ${above.large`
    grid-template-columns: 1.25fr 1fr;
    grid-gap: 5rem;
  `}
`;

const LeftColumn = styled.div``;

const RightColumn = styled.div`
  grid-row: 1;

  ${above.large`
    grid-row: auto;
  `}
`;

const ScrollDownLink = styled(Link)`
  color: var(--primary);
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  svg {
    transform: scale(0.9);
    transition: transform 0.2s linear;
  }

  &:hover svg {
    transform: scale(1) translateY(2px);
  }
`;

const ScrollDownText = styled.span`
  ${headingStyles}
  font-size: var(--h5);
  margin: 0 0 0.3rem;
`;

// order prop refers to which column should stack on top on mobile. Defaults to the left. Can
// be set to "left" or "right"
export default function Hero({ order, LeftContent, RightContent }) {
  return (
    <HeroStyles>
      <ContentWrapper>
        <LeftColumn>
          <LeftContent />
        </LeftColumn>
        <RightColumn>
          <RightContent />
        </RightColumn>
      </ContentWrapper>
      <ScrollDownLink to="#shopify-expert">
        <ScrollDownText>Learn more</ScrollDownText>
        <DownArrow />
      </ScrollDownLink>
    </HeroStyles>
  );
}
