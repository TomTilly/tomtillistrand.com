import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import placeholderSrc from '../assets/images/placeholder-avatar.jpg';
import quoteSrc from '../assets/images/quote.svg';
import { above } from '../utilities';

const TestimonialWrapper = styled.figure`
  display: grid;
  grid-auto-flow: row;
  padding: 2rem;
  ${({ alternate }) => {
    if (alternate) {
      return 'background-color: var(--accent-bg);';
    }
  }}
  grid-gap: 3rem;
  justify-items: center;
  align-items: center;
  margin: 0;

  ${above.large`
    grid-gap: 0 3rem;
    grid-template-columns: ${({ alternate }) => {
      if (alternate) {
        return '1fr auto';
      }
      return 'auto 1fr';
    }};
  `}
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid var(--gray-300);
  width: 175px;
  height: auto;
  grid-row: span 2;
  ${above.large`
    ${({ alignRight }) => {
      if (alignRight) {
        return 'grid-column: 2;';
      }
    }}
  `}
`;

const QuoteWrapper = styled.div`
  display: grid;
  grid-template-columns: 0px 1fr;
  grid-gap: 2rem 0;
  align-items: start;

  ${above.med`
    grid-template-columns: 50px 1fr;
    grid-gap: 2rem;
  `}

  &::before {
    content: '';
    background-image: url(${quoteSrc});
    background-size: 100%;
    width: 100px;
    height: 100px;
    opacity: 0.2;
    transform: translateY(-20px);

    ${above.med`
      opacity: 1;
      width: 50px;
      height: 50px;
      transform: none;
    `}
  }
`;

const Quote = styled.blockquote`
  margin: 2rem 0 0;
  font-size: 2.4rem;
  display: flex;

  p {
    margin: 0;
  }
`;

const Caption = styled.figcaption`
  font-weight: bold;
  text-align: center;
  grid-column: 1 / -1;

  ${above.large`
    grid-column: 2 / -1;
    ${({ alignRight }) => {
      if (alignRight) {
        return 'text-align: right;';
      }
      return 'text-align: left';
    }}
  `}
`;

const Author = styled.div`
  font-weight: bold;
`;

const Company = styled.div`
  font-weight: bold;
  color: var(--primary);
`;

export default function Testimonial({
  avatar,
  quote,
  name,
  company,
  alternate,
}) {
  return (
    <TestimonialWrapper alternate={alternate}>
      <Avatar src={avatar} alt={name} alignRight={alternate} />
      <QuoteWrapper>
        <Quote>
          <p>{quote}</p>
        </Quote>
        <Caption alignRight={alternate}>
          <Author>{name}</Author>
          <Company>{company}</Company>
        </Caption>
      </QuoteWrapper>
    </TestimonialWrapper>
  );
}
