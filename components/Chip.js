import styled, { css } from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'py-1 px-4 flex items-center text-sm' })`
  cursor: default;
  border-radius: 32px;
  border: 1px solid var(--pink-600);
  box-shadow: 0px 0px 2px 0px var(--pink-600);
  transition: background-color 0.15s var(--cubic);

  &:hover {
    text-decoration: underline;
    background: var(--pink-600);
  }

  ${(props) =>
    props.active &&
    css`
      background: var(--pink-600);
    `};
`;

export default function Chip({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}
