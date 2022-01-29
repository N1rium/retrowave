import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import IconButton from './IconButton';
import Fieldset from '@/components/Fieldset';
import Link from 'next/link';
import JLink from '@/components/Link';
import useOutsideClick from '@/hooks/use-outside-click';
import useIntersectionObserver from '@/hooks/use-io';

const Wrapper = styled.div.attrs({ className: 'flex items-center justify-between p-4' })`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;
  transition: all 0.25s var(--cubic);
  ${(props) =>
    props.active &&
    css`
      background: #121212;
      box-shadow: 0px 2px 14px 0px #121212;
    `};
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

const NavbarTrigger = styled.div`
  position: absolute;
  margin-top: calc(130vh);
  height: 1px;
  width: 1px;
  pointer-events: none;
`;

export default function Header() {
  const [menu, setMenu] = useState('welcome');
  const ref = useRef(null);

  const active = useIntersectionObserver(ref);

  return (
    <>
      <Wrapper active={active}>
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
            <HeaderItem onClose={() => setMenu(null)}>
              <Fieldset title="Settings">
                {/* <RangeInput type="range" min="0" max="100" value={val} onChange={(e) => setValue(e.target.value)} /> */}
                <ColorBox />
              </Fieldset>
            </HeaderItem>
          )}
          {menu === 'profile' && (
            <HeaderItem onClose={() => setMenu(null)}>
              <Fieldset title="Profile" className="text-sm">
                <div>
                  <p>
                    I'm Johnny Blomgren, also known as "Blomman", a front end developer with a passion for games and
                    music
                  </p>
                  <p>
                    I've got 6+ years experience working within web with anything from{' '}
                    <JLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">VanillaJS</JLink> to{' '}
                    <JLink href="https://angular.io/">Angular</JLink> and{' '}
                    <JLink href="https://reactjs.org/">React</JLink>. I am also comfortable in creating backends and
                    REST APIs using <JLink href="https://nestjs.com/">NestJS</JLink>,{' '}
                    <JLink href="https://www.prisma.io/">Prisma</JLink> /{' '}
                    <JLink href="https://typeorm.io/#/">TypeORM</JLink> &{' '}
                    <JLink href="https://www.postgresql.org/">Postgres</JLink>.
                  </p>
                  <p>
                    Aside from web I also do some game development in <JLink href="https://unity.com/">Unity</JLink>{' '}
                    with C# from time to time
                  </p>
                </div>
              </Fieldset>
            </HeaderItem>
          )}
          {menu === 'welcome' && (
            <HeaderItem onClose={() => setMenu(null)}>
              <Fieldset title="Welcome!" className="text-sm">
                <p>You've reached my portfolio!</p>
                <p>
                  Don't know where to start? Have a look at some of my projects or simply surf around freely. Rad things
                  are hidden everywhere!
                </p>
              </Fieldset>
            </HeaderItem>
          )}
        </ToolbarMenu>
      </Wrapper>
      <NavbarTrigger ref={ref} />
    </>
  );
}

const HeaderItem = ({ children, onClose }) => {
  const ref = useRef(null);
  const outside = useOutsideClick(ref);

  useEffect(() => {
    if (outside) onClose && onClose();
  }, [outside]);

  return <div ref={ref}>{children}</div>;
};
