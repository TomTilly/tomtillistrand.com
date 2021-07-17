import React from 'react';
import styled from 'styled-components';
import MonogramSVG from '../assets/images/monogram.inline.svg';
import { above } from '../utilities';

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
