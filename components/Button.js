import styled, { css } from 'styled-components';

export default styled.button`
  box-shadow: 0px 0px 14px 6px rgb(0 0 0 / 50%);
  font-family: 'Permanent Marker';
  transition: all 0.15s var(--cubic);
  border: 2px solid;
  border-radius: 6px;
  text-shadow: 0px 0px 10px;
  padding: 0.5em 2em;

  &:hover {
    transform: scale(0.95);
    color: var(--pink-600);
    border-color: var(--pink-600);
    background-color: transparent;
  }

  &:active {
    transform: scale(0.925);
  }

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 9999px;
    `};

  ${(props) =>
    props.primary &&
    css`
      background-color: var(--pink-600);
      border-color: var(--pink-600);
      color: var(--gray-200);
    `};
`;
