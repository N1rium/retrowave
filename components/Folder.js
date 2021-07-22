import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'flex flex-col items-center justify-center' })``;
const Icon = styled.i`
  font-size: 4rem;
  color: #d2b48c;
  text-shadow: 0px 0px 6px;
`;
const Name = styled.div`
  font-size: 1rem;
`;

export default function Folder({ name = 'New Folder', icon = 'fas fa-folder', ...rest }) {
  return (
    <Wrapper {...rest}>
      <Icon className={icon} />
      <Name>{name}</Name>
    </Wrapper>
  );
}
