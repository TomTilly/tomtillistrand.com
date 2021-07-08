import React from 'react';
import styled from 'styled-components';
import { wideContainerStyles } from '../utilities';

const ContainerStyles = styled.div`
  ${wideContainerStyles};
`;

export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
