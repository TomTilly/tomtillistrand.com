import React from 'react';
import styled from 'styled-components';
import { wideContainerStyles, textContainerStyles } from '../utilities';

const ContainerStyles = styled.div`
  ${({ type }) => (type === 'thin' ? textContainerStyles : wideContainerStyles)}
`;

export default function Container({ children, type }) {
  return <ContainerStyles type={type}>{children}</ContainerStyles>;
}
