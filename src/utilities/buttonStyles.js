import { css } from 'styled-components';

export const buttonStyles = () => css`
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
  display: inline-block;
  transition: transform var(--transition-duration) ease-in-out,
    background-color var(--transition-duration) ease-in-out,
    color var(--transition-duration) ease-in-out;

  &:hover {
    background-color: var(--primary-light);
    box-shadow: var(--elevation-2);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'font-size: var(--small-text);';
      case 'md':
        return 'font-size: 1.8rem;';
      case 'lg':
        return 'font-size: 2.4rem;';
      default:
        return 'font-size: 1.8rem;';
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
          &:hover {
            background-color: var(--secondary-light);
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);

          &:hover {
            background-color: var(--primary);
            color: var(--white);
          }
        `;
      default:
        return `
          background-color: var(--primary);
        `;
    }
  }}
`;
