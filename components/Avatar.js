import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  overflow: hidden;
`;

export default function Avatar({ size = 'base', src = '/avatar.jpeg' }) {
  const [sizes] = useState({
    sm: '32px',
    base: '64px',
    large: '128px',
    xl: '256px',
  });

  return (
    <Wrapper size={sizes[size]}>
      <Image src={src} layout="fill" objectFit="cover" />
    </Wrapper>
  );
}
