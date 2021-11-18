import Head from 'next/head';
import styled from 'styled-components';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import ParticleEmitter from '../components/ParticleEmitter';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Welcome = styled.div.attrs({ className: 'p-20 text-center' })`
  position: relative;
  width: 100vw;
  height: calc(100vh - 4rem);
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
            During the majority of my professional career, the thing that makes a person stand out is to care for the
            end consumer be it a client or a co-worker. "How would I want to use this?" is one of the most beneficial
            questions you can ask yourself.
          </p>
          <ParticleEmitter count={20} />
        </main>
      </Welcome>
    </>
  );
}
