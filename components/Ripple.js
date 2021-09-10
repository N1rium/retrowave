import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const scaleUpFadeOut = keyframes`
  to {
    opacity: 0;
    transform: scale(2);
  }
`;

const Wrapper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  border-radius: inherit;
  z-index: 0;
  pointer-events: auto;
`;

export const Ripple = styled.span.attrs((props) => {
  const { x, y, size } = props;
  return {
    style: {
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
    },
  };
})`
  position: absolute;
  border-radius: 9999px;
  background: ${(props) => props.color || 'var(--pink-400)'};
  transform: scale(0);
  animation: ${scaleUpFadeOut} 0.5s ease-in-out;
`;

export default function RippleController({ color = null }) {
  const [ripples, setRipples] = useState([]);

  const click = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { x, y, width, height } = currentTarget.getBoundingClientRect();
    const size = width > height ? width : height;

    const posX = Math.floor(clientX - x - size / 2);
    const posY = Math.floor(clientY - y - size / 2);

    setRipples([...ripples, { x: posX, y: posY, size, id: Date.now() }]);
  };

  const killRipple = (id) => setRipples((arr) => arr.filter((r) => r.id !== id));

  return (
    <Wrapper onMouseDown={click}>
      {ripples.map((r) => (
        <Ripple key={r.id} x={r.x} y={r.y} size={r.size} color={color} onAnimationEnd={() => killRipple(r.id)} />
      ))}
    </Wrapper>
  );
}
