import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'py-1 px-4 flex items-center text-sm' })`
  border-radius: 32px;
  border: 1px solid var(--pink-600);
  box-shadow: 0px 0px 2px 0px var(--pink-600);
  cursor: default;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Chip({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}
