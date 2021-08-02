import styled, { css } from 'styled-components';
import RippleContainer from './Ripple';

export const Wrapper = styled.button`
  position: relative;
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
      color: #fff;
    `};
`;

export default function Button({ children, ...rest }) {
  return (
    <Wrapper {...rest}>
      <RippleContainer />
      {children}
    </Wrapper>
  );
}
