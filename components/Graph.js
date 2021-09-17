import styled from 'styled-components';

const SVG = styled.svg``;

const UI = styled.div`
  width: 320px;
  height: 180px;
  border-image: url('ui_dark_32.png');
`;

export default function Graph({ data = [{ y: 80 }, { y: 40 }, { y: 20 }] }) {
  return (
    <UI />
    // <SVG width="290" height="160">
    //   {data.map((d, i) => (
    //     <line key={i} x1={(i * 100) / (data.length - 1)} x2={((i + 1) * 100) / (data.length - 1)} />
    //   ))}
    // </SVG>
  );
}
