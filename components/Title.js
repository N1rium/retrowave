import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const flicker = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity 0;
  }
`;

const Wrapper = styled.h1.attrs({
  className: 'text-7xl text-shadow-2 text-shadow-pulse underline p-5',
})`
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-marker);
  color: var(--pink-600);
  transform: rotateZ(-7.5deg);
`;

const Letter = styled.span`
  position: relative;
  ${(props) =>
    props.flicker &&
    css`
      animation: ${flicker} 0.15s ease-in-out;
    `};

  span {
    position: absolute;
    bottom: 0;
    width: 4px;
    height: 4px;
    background: var(--gray-200);
    box-shadow: 0px 0px 4px 0px var(--gray-200);
  }
`;

export default function Title({ text = 'abc' }) {
  const [index, setIndex] = useState(Math.floor(Math.random() * text.length));

  return (
    <Wrapper>
      {text.split('').map((char, i) => (
        <Letter key={i} flicker={i === index}>
          {char}
        </Letter>
      ))}
    </Wrapper>
  );
}
