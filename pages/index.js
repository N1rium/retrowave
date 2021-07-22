import Head from 'next/head';
import styled from 'styled-components';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Fieldset from '../components/Fieldset';
import RangeInput from '../components/RangeInput';
import Title from '../components/Title';
import Folder from '../components/Folder';
import Star from '../components/Star';
import { useState } from 'react';

const Wrapper = styled.div.attrs({ className: 'flex flex-col items-center justify-center' })`
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://img5.goodfon.com/wallpaper/nbig/a/d2/vadim-motov-by-vadim-motov-spectating-science-fiction-lambor.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const Toolbar = styled.div.attrs({ className: 'p-5' })`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--gray-200);

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

export default function Home() {
  const [menu, setMenu] = useState('welcome');
  const [val, setValue] = useState(50);

  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
      </Head>

      <Toolbar>
        <IconButton className="fas fa-user" active={menu === 'profile'} onClick={() => setMenu('profile')} />
        <IconButton className="fas fa-question" active={menu === 'welcome'} onClick={() => setMenu('welcome')} />
        <IconButton className="fas fa-cog" active={menu === 'settings'} onClick={() => setMenu('settings')} />

        <ToolbarMenu>
          {menu === 'settings' && (
            <Fieldset title="Settings">
              <RangeInput type="range" min="0" max="100" value={val} onChange={(e) => setValue(e.target.value)} />
              <ColorBox />
            </Fieldset>
          )}
          {menu === 'profile' && <Fieldset title="Profile">Dahroooo</Fieldset>}
          {menu === 'welcome' && (
            <Fieldset title="Welcome!">
              <p>You've reached Retrowave.css! A work in progress theme for Styled Components</p>
              <p className="mt-4">
                Explore and make sure you take a look at the current API for source code and other rad stuff!
              </p>
            </Fieldset>
          )}
        </ToolbarMenu>
      </Toolbar>

      <Title text="retrowave" />

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
  );
}
