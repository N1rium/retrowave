import styled from 'styled-components';

const Wrapper = styled.a`
  font-weight: bold;
  color: var(--pink-500);
  text-decoration: underline;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.05s var(--cubic);
  will-change: opacity;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Link({ children, target = '_blank', ...rest }) {
  return (
    <Wrapper target={target} {...rest}>
      {children}
    </Wrapper>
  );
}
