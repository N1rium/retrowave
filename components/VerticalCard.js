import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'p-4 pb-12' })`
  user-select: none;
  background: #212121;
  transition: all 0.15s var(--cubic);
  border-radius: 6px;

  &:hover {
    background: #282828;
  }
`;

const Image = styled.div.attrs((props) => {
  return {
    className: 'mb-4',
    style: {
      background: `url(${props.img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
  };
})`
  width: 40vmin;
  height: 40vmin;
  max-width: 256px;
  max-height: 256px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.5);
`;

const Title = styled.div.attrs({ className: 'text-lg' })`
  font-weight: bold;
`;

const Description = styled.div.attrs({ className: 'text-sm text-gray-400 mt-1' })``;

export default function VerticalCard({ img = null, title = '', description = '' }) {
  return (
    <Wrapper>
      <Image img={img} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}
