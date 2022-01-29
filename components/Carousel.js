import { useState } from 'react';
import styled from 'styled-components';
import useInterval from '@/hooks/use-interval';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Bullets = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Bullet = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.selected ? '#fff' : 'var(--pink-600)')};
`;

export default function Carousel({ items = [], interval = 5000, startIndex = 0, ...rest }) {
  const [index, setIndex] = useState(startIndex);

  useInterval(() => {
    setIndex(index + 1);
  }, interval);

  return (
    <Wrapper {...rest}>
      <ItemWrapper>{items[index] && items[index]}</ItemWrapper>
      <Bullets>
        {items.map((_, i) => (
          <Bullet key={i} selected={i === index} />
        ))}
      </Bullets>
    </Wrapper>
  );
}
