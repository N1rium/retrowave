import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div.attrs({ className: 'p-4' })`
  user-select: none;
  cursor: default;
  background: #181818;
  transition: all 0.15s var(--cubic);
  border-radius: 3px;

  &:hover {
    background: #212121;
  }
`;

const ContentWrapper = styled.div`
  max-width: 256px;
  max-height: 256px;

  @media (max-width: 768px) {
    max-width: 192px;
    max-height: 192px;
  }

  @media (max-width: 480px) {
    max-width: 128px;
    max-height: 128px;
  }
`;

const ImageWrapper = styled(ContentWrapper)`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const TextWrapper = styled(ContentWrapper)``;

const Title = styled.div.attrs({ className: 'text-lg' })`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div.attrs({ className: 'text-sm text-gray-400 mt-1' })``;

export default function VerticalCard({ img = null, title = '', description = '' }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image width="256px" height="256px" objectFit="cover" src={img} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Wrapper>
  );
}
