import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  --transition-duration: 0.1s;
  padding: 0.44em 1.33em;
  border-radius: var(--border-radius);
  border: none;
  background-color: var(--primary);
  text-decoration: none;
  color: white;
  transition: 0.3s ease box-shadow;
  box-shadow: var(--elevation-1);
  cursor: pointer;
  transition: transform var(--transition-duration) ease-in-out,
    background-color var(--transition-duration) ease-in-out;

  &:hover {
    background-color: var(--primary-light);
    box-shadow: var(--elevation-2);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
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
