import { useState } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import Link from 'next/link';

const Wrapper = styled.div.attrs({ className: 'flex items-center justify-between p-4' })`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;
`;

const Title = styled.h1.attrs({ className: 'text-2xl font-marker text-shadow-pulse text-pink-600' })`
  /* transform: rotate(-5deg); */
  cursor: default;
`;

const Toolbar = styled.div.attrs({ className: 'p-5' })`
  & > :not(:first-child) {
    margin-left: 1rem;
  }
`;

export default function Header() {
  const [menu, setMenu] = useState('welcome');

  return (
    <Wrapper>
      <Link href="/">
        <Title>Blomman</Title>
      </Link>
      {/* <Toolbar>
        <IconButton rounded className="fas fa-user" active={menu === 'profile'} onClick={() => setMenu('profile')} />
        <IconButton
          rounded
          className="fas fa-question"
          active={menu === 'welcome'}
          onClick={() => setMenu('welcome')}
        />
        <IconButton rounded className="fas fa-cog" active={menu === 'settings'} onClick={() => setMenu('settings')} />
      </Toolbar> */}
    </Wrapper>
  );
}
