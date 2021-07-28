import styled from 'styled-components';
import AppWindow from '../AppWindow';
import AppHeader from '../AppHeader';

const Wrapper = styled.div``;

export default function MusicApp() {
  return (
    <AppWindow>
      <AppHeader title="Music" />
    </AppWindow>
  );
}
