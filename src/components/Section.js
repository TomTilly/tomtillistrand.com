import React from 'react';
import styled from 'styled-components';
import { wideContainerStyles } from '../utilities';

const SectionStyles = styled.section`
  ${wideContainerStyles}
  padding: 3rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

export default function Section({ children, title, ...props }) {
  return (
    <SectionStyles {...props}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyles>
  );
}
