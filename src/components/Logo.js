import React from 'react';
import styled, { keyframes } from 'styled-components';
import MonogramSVG from '../assets/images/monogram.inline.svg';
import { above } from '../utilities';

const rubberBand = keyframes`
      from {
        transform: scale3d(1, 1, 1);
      }

      30% {
        transform: scale3d(1.25, 0.75, 1);
      }

      40% {
        transform: scale3d(0.75, 1.25, 1);
      }

      50% {
        transform: scale3d(1.15, 0.85, 1);
      }

      65% {
        transform: scale3d(0.95, 1.05, 1);
      }

      75% {
        transform: scale3d(1.05, 0.95, 1);
      }

      to {
        transform: scale3d(1, 1, 1);
      }
`;

const LogoText = ({ children, CustomTag, color, ...props }) =>
  CustomTag ? (
    <CustomTag {...props}>{children}</CustomTag>
  ) : (
    <span {...props}>{children}</span>
  );

const Monogram = ({ className }) => <MonogramSVG className={className} />;

const LogoStyles = styled.div`
  display: flex;
  align-items: center;
`;

const MonogramStyles = styled(Monogram)`
  margin-right: 1.5rem;
  flex-shrink: 0;

  &:hover {
    animation: ${rubberBand} 0.7s;
  }
`;

const LogoTextStyles = styled(LogoText)`
  display: none;
  font-size: 2.9rem;
  font-weight: bold;
  font-family: var(--heading-font);
  flex-shrink: 0;
  margin-bottom: 0;
  color: ${({ color }) => color || 'inherit'};

  ${above.small`
    display: block;
  `}
`;

export default function Logo({ ...props }) {
  return (
    <LogoStyles>
      <MonogramStyles />
      <LogoTextStyles {...props}>Tom Tillistrand</LogoTextStyles>
    </LogoStyles>
  );
}
