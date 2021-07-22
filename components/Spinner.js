import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const scale = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.75);
  }
`;

const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid var(--pink-600);
  border-radius: 50%;
  padding: 0.25em;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top: 2px solid var(--pink-600);
  border-bottom: 2px solid var(--pink-600);
  animation: ${rotate} 0.5s linear infinite;
`;

export default function Spinner(props) {
  return (
    <Wrapper>
      <Inner></Inner>
    </Wrapper>
  );
}
