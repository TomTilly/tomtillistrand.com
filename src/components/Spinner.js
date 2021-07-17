import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
`;

const SpinnerStyles = styled.div`
  width: 1em;
  height: 1em;
  border: 3px solid var(--white);
  border-top: 3px solid transparent;
  border-right: 3px solid transparent;
  border-radius: 50%;
  animation: ${spin} 0.5s linear 0s infinite;
`;

export default function Spinner() {
  return <SpinnerStyles />;
}
