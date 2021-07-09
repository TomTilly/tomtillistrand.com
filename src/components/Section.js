import React from 'react';
import styled from 'styled-components';
import { wideContainerStyles, textContainerStyles } from '../utilities';

const SectionStyles = styled.section`
  ${({ type }) => {
    if (type === 'thin') {
      return textContainerStyles;
    }
    return wideContainerStyles;
  }}
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  margin-bottom: 3rem;
`;

export default function Section({ children, title, type, ...props }) {
  return (
    <SectionStyles {...props} type={type}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyles>
  );
}
