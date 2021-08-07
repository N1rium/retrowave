import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Bar = styled.div`
  height: 100%;
  transition: transform 0.25s var(--cubic);
  transform: scaleY(0);
  background: linear-gradient(var(--pink-600), var(--pink-500));
  transform-origin: bottom;
  margin: 0 1px;
`;

const Soundbar = ({ freq, count }) => {
  const [scale, setScale] = useState(Math.random());

  const tick = () => setScale(Math.random());

  useEffect(() => {
    const interval = setInterval(tick, freq);
    return () => {
      clearInterval(interval);
    };
  }, [freq]);

  return <Bar style={{ transform: `scaleY(${scale})`, flexBasis: 100 / count }} />;
};

export default function Soundbars({ count = 4, width = '16px', height = '16px', freq = 200 }) {
  return (
    <Wrapper style={{ height, width }}>
      {new Array(count).fill().map((_, i) => (
        <Soundbar key={i} count={count} freq={freq} />
      ))}
    </Wrapper>
  );
}
