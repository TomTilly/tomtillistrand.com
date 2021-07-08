import React from 'react';
import styled from 'styled-components';
import { wideContainerStyles } from '../utilities';

const SectionStyles = styled.section`
  ${wideContainerStyles}
  padding: 3rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
`;

export default function Section({ children, title, ...props }) {
  return (
    <SectionStyles {...props}>
      <h2>{title}</h2>
      {children}
    </SectionStyles>
  );
}
