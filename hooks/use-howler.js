import { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';

const initialState = {
  isPlaying: false,
  hasPlayed: false,
  volume: 1,
  volumePercentage: 100,
  progress: 0,
  duration: 0,
  src: null,
  loading: false,
  songIndex: 0,
  songs: [],
};

export default function useHowler({ songs = [], updateInterval = 500, onSongEnded = null }) {
  const [state, setState] = useState({
    ...initialState,
    songs: songs.map((opt) => new Howl({ ...opt })),
  });
  const updateState = (partial) => setState((s) => ({ ...s, ...partial }));

  const getSong = () => state.songs[state.songIndex] || {};

  const setSongIndex = (songIndex) => {
    if (state.loading) return;
    if (songIndex === state.songIndex) {
      state.isPlaying ? pause() : play();
      return;
    }
    getSong().stop();
    updateState({ songIndex, isPlaying: false, progress: 0 });
  };

  const previous = () => {
    if (state.progress > 3) {
      stop();
      return;
    }

    getSong().stop();
    const newIndex = state.songIndex === 0 ? state.songs.length - 1 : state.songIndex - 1;
    updateState({ songIndex: newIndex, isPlaying: false, progress: 0 });
  };

  const next = () => {
    getSong().stop();
    const newIndex = state.songIndex === state.songs.length - 1 ? 0 : state.songIndex + 1;
    updateState({ songIndex: newIndex, isPlaying: false, progress: 0 });
  };

  const play = () => {
    if (state.loading || state.isPlaying) return;
    const song = getSong();
    if (song._state === 'unloaded') {
      updateState({ loading: true });
      song.load();
      song.on('load', () => {
        updateState({ loading: false, hasPlayed: true });
        play();
      });
    } else {
      song.play();
      updateState({ isPlaying: true, hasPlayed: true });
    }
  };

  const pause = () => {
    getSong().pause();
    updateState({ isPlaying: false });
  };

  const stop = () => {
    getSong().stop();
    updateState({
      isPlaying: false,
      progress: 0,
    });
  };

  const togglePlay = () => {
    state.isPlaying ? pause() : play();
  };

  const setVolume = (volume) => {
    getSong().volume(volume);
  };

  const setGlobalVolume = (volume) => {
    Howler.volume(volume);
    updateState({ volume, volumePercentage: (volume * 100).toFixed(2) });
  };

  const seek = (val) => {
    getSong().seek(val);
    updateState({ progress: getSong().seek() });
  };

  const tick = () => {
    /* TODO - only update when actually playing */
    updateState({
      duration: getSong().duration(),
      progress: getSong().seek(),
    });
  };

  useEffect(() => {
    getSong().once('end', () => {
      next();
      onSongEnded && onSongEnded(getSong());
    });
    const interval = setInterval(tick, updateInterval);
    return () => {
      clearInterval(interval);
    };
  }, [state.songs, state.songIndex]);

  useEffect(() => {
    if (state.hasPlayed) {
      play();
    }
  }, [state.songIndex]);

  return {
    ...state,
    ...{ play, pause, stop, togglePlay, setVolume, setGlobalVolume, seek, previous, next, setSongIndex },
  };
}
