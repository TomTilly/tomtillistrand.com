import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { above } from '../utilities';

const GridStyles = styled.div`
  --columns: ${({ columns }) => (columns ? columns.toString() : 'auto-fill')};
  --minColWidth: ${({ minColWidth }) =>
    minColWidth ? `${minColWidth.toString()}px` : '400px'};

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;

  ${above.small`
    grid-template-columns: repeat(var(--columns), minmax(var(--minColWidth), 1fr));
  `}
`;

function Grid({ children, columns, minColWidth }) {
  return (
    <GridStyles columns={columns} minColWidth={minColWidth}>
      {children}
    </GridStyles>
  );
}

Grid.propTypes = {
  children: PropTypes.element,
  columns: PropTypes.string,
  minColWidth: PropTypes.string,
};

export default Grid;
