import React from 'react';
import styled from 'styled-components';
import { wideContainerStyles } from '../utilities';

// background-image: ${{backgroundImage} => `url(${backgroundImage})`};
const HeroStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${wideContainerStyles}
`;

const LeftCol = styled.div``;

const RightCol = styled.div``;

// order prop refers to which column should stack on top on mobile. Defaults to the left. Can
// be set to "left" or "right"
export default function Hero({ order, leftContent, rightContent }) {
  return (
    <HeroStyles>
      <LeftCol>{leftContent}</LeftCol>
      <RightCol>{rightContent}</RightCol>
    </HeroStyles>
  );
}
