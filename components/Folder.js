import styled from 'styled-components';
import IconButton from './IconButton';

const Wrapper = styled.div.attrs({ className: 'flex flex-col items-center justify-center' })``;
const Icon = styled(IconButton).attrs({ className: 'text-5xl' })`
  text-shadow: 0px 0px 6px;
  cursor: default;
  border-radius: 6px;
`;
const Name = styled.div.attrs({ className: 'text-sm mt-2' })``;

export default function Folder({ name = 'New Folder', icon = 'fas fa-folder', ...rest }) {
  return (
    <Wrapper {...rest}>
      <Icon className={icon} />
      <Name>{name}</Name>
    </Wrapper>
  );
}
