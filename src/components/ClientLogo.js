import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';

const Logo = styled.img`
  ${({ isDarkMode }) => (isDarkMode ? 'filter: invert(1);' : '')}
  max-height: 150px;
`;

function ClientLogo({ src, alt }) {
  const { prefersDark, toggleDark } = useContext(ThemeContext);
  return <Logo isDarkMode={prefersDark} src={src} alt={alt} />;
}

export default ClientLogo;
