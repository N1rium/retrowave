import styled, { css, keyframes } from 'styled-components';

const traverse = (x, y) => keyframes`
  0% {
    opacity: 0;
    transform: translate(0,0);
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate(${x}, ${y});
    opacity: 0;
  }
`;

const Wrapper = styled.span`
  ${(props) => css`
    position: absolute;
    will-change: transform, opacity;
    left: ${props.x};
    top: ${props.y};
    width: ${props.size};
    height: ${props.size};
    animation: ${traverse(props.dx, props.dy)} ${props.ttl} linear infinite;
    background: ${props.color};
    color: ${props.color};
    border-radius: 50%;
    box-shadow: 0px 0px 10px 0px;
  `};
`;

export default function Particle({
  color = '#fff',
  size = '4px',
  ttl = '0.5s',
  x = 0,
  y = 0,
  dx = '250%',
  dy = '250%',
  onDeath = () => {},
}) {
  return <Wrapper color={color} size={size} ttl={ttl} x={x} y={y} dx={dx} dy={dy} onAnimationEnd={onDeath} />;
}
