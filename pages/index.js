import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import ParticleEmitter from '../components/ParticleEmitter';
import Carousel from '@/components/Carousel';
import HorizontalScroller from '@/components/HorizontalScroller';
import VerticalCard from '@/components/VerticalCard';
import ComponentCard from '@/components/ComponentCard';
import Stack from '@/components/home/Stack';

const Container = styled.div`
  position: relative;
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Welcome = styled.div.attrs({ className: 'p-20 text-center' })`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(#121212 30%, transparent 80%), url('/bg1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  main {
    max-width: 640px;
    margin: 0 auto;
  }
`;

const CarouselWrapper = styled.div`
  width: 100vw;
  height: 75vh;
  position: relative;
`;

const Slide1 = () => {
  return (
    <Welcome>
      <main>
        <h1 className="font-marker text-5xl mt-20">
          Programming is <span className="text-pink-600 text-6xl underline text-shadow">art!</span>
        </h1>
        <p className="mt-10 text-xl">
          <span className="font-marker mr-1 text-xl">"</span>Source code can be as elegant as the product itself
          <span className="font-marker ml-1 text-xl">"</span>
        </p>
        <p className="mt-4">
          During the majority of my professional career, the thing that makes a person stand out is to care for the end
          consumer be it a client or a co-worker. "How would I want to use this?" is one of the most beneficial
          questions you can ask yourself.
        </p>
        <ParticleEmitter count={20} />
      </main>
    </Welcome>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Johnny Blomgren</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio of Johnny Blomgren, Front-end developer with a passion for music and games!"
        />
        <meta
          name="keywords"
          content="jblomgren, johnny blomgren, blomman, portfolio, front-end, frontend, react, nextjs, styled components, nestjs, n1rium, nirium"
        />
      </Head>
      <CarouselWrapper>
        <Carousel items={[<Slide1 />]} />
      </CarouselWrapper>
      <Container>
        <div className="flex items-end justify-between">
          <h3 className="font-fredoka text-2xl">Recent Projects</h3>
          <Link href="/projects">View all</Link>
        </div>
        <HorizontalScroller>
          <VerticalCard title="Ikonen" description="2D Platformer made in Unity" img="/test_logo.jpeg" />
          <VerticalCard
            title="Generic Inventory System"
            description="Inpsired by Minecraft / Terraria"
            img="/test_logo.jpeg"
          />
          <VerticalCard title="Sunny Side" description="Top down sandbox multiplayer game" img="/test_logo.jpeg" />
          <VerticalCard title="Chessports" description="Online chess platform" img="/test_logo.jpeg" />
          <VerticalCard title="JSON Fiddle" description="Json inspection tool" img="/test_logo.jpeg" />
          <VerticalCard title="Artlify" description="Ecommerce site for art" img="/test_logo.jpeg" />
          <VerticalCard title="Ikonen" description="2D Platformer made in Unity" img="/test_logo.jpeg" />
        </HorizontalScroller>

        <div className="mt-4">
          <h3 className="font-fredoka text-2xl">Generic React Components</h3>
          <p className="mt-0 text-gray-400 text-sm">Small neat components ready to be used by you!</p>
        </div>
        <HorizontalScroller>
          <ComponentCard title="Ripple Effect" img="/logo/react.png" />
          <ComponentCard title="Range Slider" img="/logo/react.png" />
          <ComponentCard title="Progress Bar" img="/logo/react.png" />
          <ComponentCard title="Carousel" img="/logo/react.png" />
          <ComponentCard title="Particle Effect" img="/logo/react.png" />
          <ComponentCard title="useHowler" img="/logo/react.png" />
        </HorizontalScroller>
        <Stack />
      </Container>
    </>
  );
}
