import styled from 'styled-components';
import Soundbars from '../Soundbars';

const Wrapper = styled.div.attrs({ className: 'flex items-center p-2' })`
  background: transparent;
  cursor: default;
  transition: background-color 0.075s var(--cubic);
  border-radius: 6px;
  &:hover {
    background: #212121;
  }
`;
const Column = styled.div.attrs({ className: 'px-2' })``;
const Index = styled(Column)`
  min-width: 36px;
  text-align: center;
  color: ${(props) => (props.active ? 'var(--pink-600)' : 'inherit')};
`;
const Name = styled.div`
  font-weight: bold;
  color: ${(props) => (props.active ? 'var(--pink-600)' : 'inherit')};
`;

const Artist = styled.div.attrs({ className: 'text-sm text-gray-400' })``;

export default function SongRow({ name = '', artist = '', active = false, playing = false, index = 1, ...rest }) {
  return (
    <Wrapper active={active} {...rest}>
      <Index active={active || playing}>{playing ? <Soundbars /> : index}</Index>
      <Column>
        <Name active={active || playing}>{name}</Name>
        <Artist>{artist}</Artist>
      </Column>
    </Wrapper>
  );
}
