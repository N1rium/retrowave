import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ripple = keyframes`
  to {
    opacity: 0;
    transform: scale(2);
  }
`;

export const Root = styled.span`
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
  return {
    style: {
      left: `${props.x}px`,
      top: `${props.y}px`,
      width: `${props.size}px`,
      height: `${props.size}px`,
    },
  };
})`
  position: absolute;
  border-radius: 9999px;
  background: ${(props) => props.color || 'var(--pink-400)'};
  animation: ${ripple} 0.5s ease-in-out;
  transform: scale(0);
`;

export default function RippleContainer({ color = null }) {
  const [ripples, setRipples] = useState([]);

  const click = (e) => {
    const { currentTarget: target, clientX, clientY } = e;

    const bounds = target.getBoundingClientRect();

    const size = bounds.width > bounds.height ? bounds.width : bounds.height;

    const x = Math.floor(clientX - bounds.x - bounds.width / 2);
    const y = Math.floor(clientY - bounds.y - bounds.width / 2);

    setRipples([...ripples, { x, y, size, id: Date.now() }]);
  };

  const killRipple = (id) => setRipples((arr) => arr.filter((r) => r.id !== id));

  return (
    <Root onMouseDown={click}>
      {ripples.map((r) => (
        <Ripple key={r.id} x={r.x} y={r.y} size={r.size} color={color} onAnimationEnd={() => killRipple(r.id)} />
      ))}
    </Root>
  );
}
