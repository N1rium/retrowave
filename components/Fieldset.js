import styled, { keyframes } from 'styled-components';

const blinkIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.fieldset.attrs({ className: 'p-4' })`
  background: rgba(0, 0, 0, 0.5);
  animation: ${blinkIn} 0.15s var(--cubic);
  box-shadow: 0px 0px 6px 2px rgb(0 0 0 / 50%);
  border: 2px solid var(--pink-600);
  border-radius: 8px;
  transition: all 0.15s var(--cubic);

  &:hover {
    box-shadow: 0px 0px 8px 4px rgb(0 0 0 / 50%);
    legend {
      text-shadow: 0px 0px 4px;
    }
  }
`;

const Legend = styled.legend.attrs({ className: 'px-3' })`
  color: var(--pink-600);
  font-family: 'Permanent marker';
  font-size: 1.2rem;
`;

export default function Container({ children, title, ...rest }) {
  return (
    <Wrapper {...rest}>
      {title && <Legend>{title}</Legend>}
      {children}
    </Wrapper>
  );
}
