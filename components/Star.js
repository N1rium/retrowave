import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  width: 2px;
  height: 2px;
  background-color: var(--gray-200);
  animation: ${blink} 5s ease-in-out infinite;
  border-radius: 50%;
`;

export default function Star(props) {
  return <Wrapper {...props} />;
}
