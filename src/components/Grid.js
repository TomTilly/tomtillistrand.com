import React from 'react';
import styled from 'styled-components';
import { above } from '../utilities';

const GridStyles = styled.div`
  --columns: ${({ columns }) => (columns ? columns.toString() : 'auto-fill')};

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;

  ${above.small`
    grid-template-columns: repeat(var(--columns), minmax(400px, 1fr));
  `}
`;

export default function Grid({ children, columns }) {
  return <GridStyles columns={columns}>{children}</GridStyles>;
}
