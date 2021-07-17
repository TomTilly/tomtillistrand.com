import styled from 'styled-components';

export default styled.div`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--accent-bg)'};
  ${({ backgroundImage }) =>
    backgroundImage && `background-image: url(${backgroundImage});`}
`;
