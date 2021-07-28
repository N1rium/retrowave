import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'flex items-center justify-between p-2' })``;
const Circle = styled.div`
  border-radius: 9999px;
  width: 12px;
  height: 12px;
  background: ${(props) => props.color || 'transparent'};

  &:not(:first-child) {
    margin-left: 0.25rem;
  }
`;

export default function AppHeader({ close = true, minimize = true, maximize = true, title = 'Application' }) {
  return (
    <Wrapper>
      <div className="flex">
        {close && <Circle color="red" />}
        {minimize && <Circle color="yellow" />}
        {maximize && <Circle color="green" />}
      </div>
      <div className="text-sm">{title}</div>
      <div />
    </Wrapper>
  );
}
