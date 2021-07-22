import styled, { css } from 'styled-components';

const I = styled.i.attrs({ className: 'flex flex-inline items-center justify-center p-3' })`
  transition: all 0.15s var(--cubic);
  border: 2px solid var(--pink-600);
  border-radius: 9999px;
  font-size: 1.25rem;
  box-shadow: 0px 0px 14px 6px rgb(0 0 0 / 50%);
  min-width: 52px;
  min-height: 52px;

  &:hover {
    text-shadow: 0px 0px 2px;
    transform: scale(0.95);
    background: var(--pink-600);
  }

  &:active {
    transform: scale(0.925);
  }

  ${(props) =>
    props.active &&
    css`
      background: var(--pink-600);
      text-shadow: 0px 0px 2px;
    `};
`;

export default function IconButton(props) {
  return <I {...props}></I>;
}
