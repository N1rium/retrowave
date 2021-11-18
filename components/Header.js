import { useState } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import Fieldset from '@/components/Fieldset';
import RangeInput from '@/components/RangeInput';
import Link from 'next/link';
import JLink from '@/components/Link';

const Wrapper = styled.div.attrs({ className: 'flex items-center justify-between p-4' })`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`;

const Title = styled.h1.attrs({ className: 'text-xl font-fredoka text-shadow-pulse text-pink-600' })`
  /* transform: rotate(-5deg); */
  cursor: default;
`;

const Toolbar = styled.div.attrs({ className: 'flex items-center' })`
  & > :not(:first-child) {
    margin-left: 1rem;
  }
`;

const ToolbarMenu = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-1rem, 100%);
  max-width: 380px;
  & > * {
    min-width: 320px;
  }
`;

const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: var(--pink-600);
`;

export default function Header() {
  const [menu, setMenu] = useState('welcome');

  return (
    <Wrapper>
      <Link href="/">
        <Title>Johnny Blomgren</Title>
      </Link>
      <Toolbar>
        <IconButton rounded className="fas fa-user" active={menu === 'profile'} onClick={() => setMenu('profile')} />
        <IconButton
          rounded
          className="fas fa-question"
          active={menu === 'welcome'}
          onClick={() => setMenu('welcome')}
        />
        <IconButton rounded className="fas fa-cog" active={menu === 'settings'} onClick={() => setMenu('settings')} />
      </Toolbar>
      <ToolbarMenu>
        {menu === 'settings' && (
          <Fieldset title="Settings">
            {/* <RangeInput type="range" min="0" max="100" value={val} onChange={(e) => setValue(e.target.value)} /> */}
            <ColorBox />
          </Fieldset>
        )}
        {menu === 'profile' && (
          <Fieldset title="Profile" className="text-sm">
            <div>
              <p>
                I'm Johnny Blomgren, also known as "Blomman", a front end developer with a passion for games and music
              </p>
              <p className="mt-2">
                I've got 6+ years experience working within web with anything from{' '}
                <JLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">VanillaJS</JLink> to{' '}
                <JLink href="https://angular.io/">Angular</JLink> and <JLink href="https://reactjs.org/">React</JLink>.
                I am also comfortable in creating backends and REST APIs using{' '}
                <JLink href="https://nestjs.com/">NestJS</JLink>, <JLink href="https://www.prisma.io/">Prisma</JLink> /{' '}
                <JLink href="https://typeorm.io/#/">TypeORM</JLink> &{' '}
                <JLink href="https://www.postgresql.org/">Postgres</JLink>.
              </p>
              <p className="mt-2">
                Aside from web I also do some game development in <Link href="https://unity.com/">Unity</Link> with C#
                from time to time
              </p>
            </div>
          </Fieldset>
        )}
        {menu === 'welcome' && (
          <Fieldset title="Welcome!" className="text-sm">
            <p>You've reached my portfolio!</p>
            <p className="mt-2">
              Don't know where to start? Have a look at some of my projects or simply surf around freely. Rad things are
              hidden everywhere!
            </p>
          </Fieldset>
        )}
      </ToolbarMenu>
    </Wrapper>
  );
}
