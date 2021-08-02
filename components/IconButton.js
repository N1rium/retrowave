import styled, { css } from 'styled-components';
import RippleContainer from './Ripple';

const Wrapper = styled.i.attrs({ className: 'flex flex-inline items-center justify-center' })`
  position: relative;
  transition: all 0.15s var(--cubic);
  border: 2px solid var(--pink-600);
  padding: 0.75rem;
  font-size: 1.25rem;
  box-shadow: 0px 0px 14px 6px rgb(0 0 0 / 50%);
  min-width: 52px;
  min-height: 52px;

  border-radius: ${(props) => (props.rounded ? '9999px' : '6px')};

  ${(props) =>
    props.sm &&
    css`
      min-width: 36px;
      min-height: 36px;
      padding: 0.5rem;
      font-size: 1rem;
      border-width: 1px;
    `};

  ${(props) =>
    props.large &&
    css`
      min-width: 64px;
      min-height: 64px;
      font-size: 1.5rem;
    `};

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

export default function IconButton({ children, ...rest }) {
  return (
    <Wrapper {...rest}>
      <RippleContainer />
      {children}
    </Wrapper>
  );
}
