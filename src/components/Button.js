import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5em;
  border-radius: var(--border-radius);
  border: none;
  transition: 0.3s ease box-shadow;
  box-shadow: var(--elevation-1);
  &:hover {
    box-shadow: var(--elevation-2);
  }

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'font-size: var(--small-text)';
      case 'md':
        return 'font-size: 1.8rem';
      case 'lg':
        return 'font-size: 2.4rem';
      default:
        return 'font-size: 1.8rem';
    }
  }}

  ${({ type }) => {
    switch (type) {
      case 'primary':
        return `
          background-color: var(--primary);
        `;
      case 'secondary':
        return `
          background-color: var(--secondary);
        `;
      case 'ghost':
        return `
          background-color: transparent;
        `;
      default:
        return `
          background-color: var(--primary);
        `;
    }
  }}
`;
