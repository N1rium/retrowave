import styled from 'styled-components';

const Wrapper = styled.div``;
const Container = styled.div`
  position: relative;
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  height: 480px;
  margin: 0 auto;
  padding: 2rem;
`;

export default function InventorySystem({ project }) {
  return (
    <Wrapper>
      <Hero>
        <h1 className="text-4xl font-fredoka">Inventory System</h1>
      </Hero>
      <Container></Container>
    </Wrapper>
  );
}
