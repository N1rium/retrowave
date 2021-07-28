import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Particle from './Particle';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

export default function ParticleEmitter({
  count = 5,
  sizes = ['4px', '6px'],
  ttls = [5, 10],
  colors = ['#fff', 'var(--pink-600)'],
}) {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };

  const getParticle = () => ({
    id: Math.random() * 1000,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    ttl: `${getRandomIntInclusive(ttls[0], ttls[1])}s`,
    x: `${getRandomIntInclusive(0, 100)}%`,
    y: `${getRandomIntInclusive(0, 100)}%`,
    dx: `${getRandomIntInclusive(-5000, 5000)}%`,
    dy: `${getRandomIntInclusive(-5000, 5000)}%`,
  });

  const [arr, setArr] = useState(new Array(count).fill('').map(() => getParticle()));

  return (
    <Wrapper>
      {arr.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
    </Wrapper>
  );
}
