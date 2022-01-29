import styled from 'styled-components';

const Wrapper = styled.div``;
const Container = styled.div`
  position: relative;
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  h3 {
    font-size: 2rem;
    margin-top: 1rem;
  }
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
        <h1 className="text-4xl">JSON Fiddle</h1>
      </Hero>
      <Container>
        <h3>What it is</h3>
        <p>
          JSON Fiddle is a lightweight tool that enables a nice and clean overview of JSON data. It has support for
          expanding/collapsing nested properties as well as formatting JSON input and other handy features.
        </p>
        <h3>How it works</h3>
        <p>
          A wrapper component takes in JSON data and determines what type each child property contains and continues to
          do so in recursion until the bottom of the tree has been reached
        </p>
      </Container>
    </Wrapper>
  );
}
