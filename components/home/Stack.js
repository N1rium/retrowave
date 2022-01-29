import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'p-2' })`
  width: 100%;
  background: #181818;
`;

export default function Stack() {
  return <Wrapper></Wrapper>;
}
