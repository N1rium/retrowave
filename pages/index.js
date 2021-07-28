import Head from 'next/head';
import styled from 'styled-components';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Fieldset from '../components/Fieldset';
import RangeInput from '../components/RangeInput';
import Title from '../components/Title';
import Folder from '../components/Folder';
import Star from '../components/Star';
import ParticleEmitter from '../components/ParticleEmitter';
import { useState } from 'react';
import Link from '@/components/Link';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Welcome = styled(Container).attrs({ className: 'p-20 text-center' })`
  background: linear-gradient(#121212 30%, transparent 80%),
    url('https://c.wallhere.com/photos/c1/a2/vaporwave_car_Chevrolet_city_skyscraper_trees_birds_sunset-1794077.jpg!d');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  main {
    max-width: 640px;
    margin: 0 auto;
  }
`;

const Wrapper = styled(Container).attrs({ className: 'flex flex-col items-center justify-center' })`
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.5) 75%, #121212 100%),
    url('https://img5.goodfon.com/wallpaper/nbig/a/d2/vadim-motov-by-vadim-motov-spectating-science-fiction-lambor.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Toolbar = styled.div.attrs({ className: 'p-5' })`
  position: absolute;
  top: 0;
  right: 0;

  & > :not(:first-child) {
    margin-left: 1rem;

    input {
      width: 100%;
    }
  }
`;

const ToolbarMenu = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-1rem, 100%);
  & > * {
    min-width: 320px;
  }
`;

const Nav = styled.div.attrs({ className: 'flex flex-col p-10' })`
  position: absolute;
  bottom: 0;
  left: 0;

  button {
    min-width: 320px;
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: var(--pink-600);
`;

const Socials = styled.div.attrs({ className: 'p-5 flex ' })`
  position: absolute;
  bottom: 0;
  right: 0;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`;

export default function Home() {
  const [menu, setMenu] = useState('welcome');
  const [val, setValue] = useState(50);
  const redirect = (url) => window.open(url);

  return (
    <>
      <Wrapper>
        <Head>
          <title>Johnny Blomgren</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
        </Head>

        <Toolbar>
          <IconButton rounded className="fas fa-user" active={menu === 'profile'} onClick={() => setMenu('profile')} />
          <IconButton
            rounded
            className="fas fa-question"
            active={menu === 'welcome'}
            onClick={() => setMenu('welcome')}
          />
          <IconButton rounded className="fas fa-cog" active={menu === 'settings'} onClick={() => setMenu('settings')} />

          <ToolbarMenu>
            {menu === 'settings' && (
              <Fieldset title="Settings">
                <RangeInput type="range" min="0" max="100" value={val} onChange={(e) => setValue(e.target.value)} />
                <ColorBox />
              </Fieldset>
            )}
            {menu === 'profile' && (
              <Fieldset title="Profile" className="text-sm">
                <div>
                  <p>
                    I'm Johnny Blomgren, also known as "Blomman", a front end developer with a passion for games and
                    music
                  </p>
                  <p className="mt-2">
                    I've got 6+ years experience working within web with anything from{' '}
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">VanillaJS</Link> to{' '}
                    <Link href="https://angular.io/">Angular</Link> and <Link href="https://reactjs.org/">React</Link>.
                    I am also comfortable in creating backends and REST APIs using{' '}
                    <Link href="https://nestjs.com/">NestJS</Link>, <Link href="https://www.prisma.io/">Prisma</Link> /{' '}
                    <Link href="https://typeorm.io/#/">TypeORM</Link> &{' '}
                    <Link href="https://www.postgresql.org/">Postgres</Link>.
                  </p>
                  <p className="mt-2">
                    Aside from web I also do some game development in <Link href="https://unity.com/">Unity</Link> with
                    C# from time to time
                  </p>
                </div>
              </Fieldset>
            )}
            {menu === 'welcome' && (
              <Fieldset title="Welcome!" className="text-sm">
                <p>You've reached my portfolio!</p>
                <p className="mt-2">
                  Don't know where to start? Have a look at some of my projects or simply surf around freely. Rad things
                  are hidden everywhere!
                </p>
              </Fieldset>
            )}
          </ToolbarMenu>
        </Toolbar>

        <Socials>
          <IconButton sm className="fab fa-github" onClick={() => redirect('https://github.com/n1rium')} />
          <IconButton
            sm
            className="fab fa-linkedin-in"
            onClick={() => redirect('https://www.linkedin.com/in/johnny-blomgren-6a516789/')}
          />
          <IconButton sm className="fas fa-envelope" />
        </Socials>

        <Title text="blomman" />

        <Star style={{ position: 'absolute', top: '2em', left: '40vw' }} />

        <Nav>
          <Button primary>
            <div>Join session</div>
          </Button>
          <Button primary>
            <div>Create session</div>
          </Button>
        </Nav>
      </Wrapper>
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
            end consumer be it a client or a co-worker. "How would I want to use this?" is one of the most benefitial
            question you can ask yourself.
          </p>
        </main>
        <ParticleEmitter count={20} />
      </Welcome>
    </>
  );
}
