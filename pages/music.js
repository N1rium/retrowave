import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import IconButton from '@/components/IconButton';
import RangeInput from '@/components/RangeInput';
import SongRow from '@/components/music/SongRow';

import useHowler from '@/hooks/use-howler';

const Wrapper = styled.div.attrs({ className: 'flex flex-col' })`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main`
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Footer = styled.footer.attrs({ className: 'py-4 px-8' })`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 2fr 1fr;
  border-top: 1px solid #212121;
  background: #212121;

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr auto;
  }
`;

const Controls = styled.div.attrs({ className: 'flex flex-col items-center' })`
  input[type='range'] {
    width: 100%;
  }
`;

const Buttons = styled.div.attrs({ className: 'flex items-center mb-4' })``;

const Icon = styled.i.attrs({ className: 'text-xl fas' })`
  opacity: 1;
  transition: opacity 0.15s var(--cubic);

  &:hover {
    opacity: 0.5;
  }
`;

const Previous = styled(Icon).attrs({ className: 'fa-step-backward mr-4' })``;
const Next = styled(Icon).attrs({ className: 'fa-step-forward ml-4' })``;

const Times = styled.div.attrs({ className: 'flex items-center' })`
  width: 100%;
`;

const VolumeControls = styled.div.attrs({ className: 'flex items-center justify-end' })`
  @media (max-width: 768px) {
    display: none;
  }
`;

const SongHeader = styled.div.attrs({ className: 'flex items-center' })`
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;

    img {
      margin: 0;
      margin-bottom: 1rem;
    }
  }
`;

const SongInfo = styled.div`
  width: 100%;
`;

const SongList = styled.div`
  padding: 0 5em;
  @media (max-width: 768px) {
    padding: 0 1em;
  }
`;

const SongAttributes = styled.div.attrs({ className: 'flex items-center' })`
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default function Music({ songs = [] }) {
  const {
    isPlaying,
    volume,
    loading,
    progress,
    duration,
    songIndex,
    play,
    togglePlay,
    setGlobalVolume,
    seek,
    setSongIndex,
    previous,
    next,
  } = useHowler({
    songs: songs.map((s) => ({ ...s, preload: false })),
  });

  return (
    <Wrapper>
      <Head>
        <title>Johnny Blomgren - Music</title>
        <meta
          name="description"
          content="Music portfolio made by Johnny Blomgren with a built in music player made with React + Styled Components"
        />
      </Head>
      <Main>
        <SongHeader>
          <img
            className="mr-8"
            src="/music/albumcover.jpeg"
            alt="album cover"
            style={{ width: '192px', height: '192px', objectFit: 'cover', borderRadius: '6px' }}
          />
          <SongInfo>
            <div className="text-gray-400 text-xs uppercase">album</div>
            <h1 className="text-5xl font-bold mb-2">Genesis</h1>
            <SongAttributes>
              <div className="text-sm text-gray-400">
                <span className="font-bold text-gray-200">Blomman</span>
                <span className="mx-2">•</span>
                <span>{songs.length} songs</span>
              </div>
            </SongAttributes>
          </SongInfo>
        </SongHeader>

        <SongList>
          {songs.map((song, i) => (
            <SongRow
              key={song.id}
              index={i + 1}
              active={songIndex === i}
              playing={songIndex === i && isPlaying}
              name={song.name}
              artist={song.artist}
              onClick={() => setSongIndex(i)}
            />
          ))}
        </SongList>
      </Main>
      <Footer className="bg-gray-800">
        <div></div>
        <Controls>
          <Buttons>
            <Previous onClick={previous} />
            <IconButton className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} rounded onClick={togglePlay} />
            <Next onClick={next} />
          </Buttons>
          <Times>
            <RangeInput
              value={progress}
              min={0}
              max={duration || 100}
              onChange={(e) => seek(e.target.value)}
              knob="hover"
              disabled={!duration}
            />
          </Times>
        </Controls>
        <VolumeControls>
          <i className="fas fa-volume-down mr-4" />
          <RangeInput
            value={Math.floor(volume * 100)}
            onChange={(e) => setGlobalVolume(Math.floor(e.target.value) / 100)}
            knob="hover"
          />
        </VolumeControls>
      </Footer>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const songs = [
    { id: 'theunknown', name: 'The Unknown', src: '/music/the-unknown.mp3', artist: 'Blomman' },
    { id: 'ghosts', name: 'Ghosts', src: '/music/ghosts.mp3', artist: 'Blomman' },
    { id: 'dailianis', name: 'Dailianis', src: '/music/dailianis.mp3', artist: 'Blomman' },
    { id: 'boilingpoint', name: 'Boiling Point', src: '/music/boiling-point.mp3', artist: 'Blomman' },
    // { id: 'enterthetomb', name: 'Enter The Tomb', src: '/music/enter-the-tomb.mp3', artist: 'Blomman' },
  ];

  return {
    props: {
      songs,
    },
  };
}
