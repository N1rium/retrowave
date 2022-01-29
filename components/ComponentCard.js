import styled from 'styled-components';
import Image from 'next/image';

const Logo = styled.div`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  background: #181818;
  padding: 1rem;
  transition: all 0.15s var(--cubic);
  overflow: hidden;
`;

const Wrapper = styled.div`
  user-select: none;
  text-align: center;
  cursor: default;
  &:hover {
    ${Logo} {
      background: #212121;
    }
  }
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.5rem;
`;

export default function ComponentCard({ title = '', img = null }) {
  return (
    <Wrapper>
      <Logo>{img && <Image src={img} width="128" height="128" />}</Logo>
      <Title>{title}</Title>
    </Wrapper>
  );
}
