import styled from 'styled-components';

export default styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  will-change: background-color;
  transition: background-color 0.15s var(--cubic);
  border: 2px solid var(--pink-600);
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
