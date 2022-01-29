import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --font-marker: 'Permanent marker';
    --font-opensans: 'Lato', sans-serif;
    --font-fredoka: 'Fredoka One', cursive;

    --gray-200: #E5E7EB;

    --pink-300: #F9A8D4;
    --pink-400: #F472B6;
    --pink-500: #EC4899;
    --pink-600: #DB2777;

    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-8: 2rem;

    --cubic: cubic-bezier(0.4, 0, 0.2, 1);
  }

  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: #121212;
    color: var(--gray-200);
    font-family: var(--font-opensans);
  }

  body {
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }


  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
      margin: 0;
  }

  a {
    color: inherit;
    font-weight: bold;
    color: var(--pink-500);
    text-decoration: underline;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.05s var(--cubic);
    will-change: opacity;

    &:hover {
      opacity: 0.8;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-fredoka);
  }

  p {
    margin: 1rem 0;
  }

  .flex {
    display: flex;

    &.flex-inline {
      display: inline-flex;
    }

    &.flex-row {
      flex-direction: row;
    }

    &.flex-col {
      flex-direction: column;
    }

    &.items-start {
      align-items: flex-start;
    }

    &.items-center {
      align-items: center;
    }
    
    &.items-end {
      align-items: flex-end;
    }

    &.justify-start {
      justify-content: flex-start;
    }

    &.justify-center {
      justify-content: center;
    }
    
    &.justify-end {
      justify-content: flex-end;
    }

    &.justify-between {
      justify-content: space-between;
    }

    &.justify-around {
      justify-content: space-around;
    }

    &.justify-evenly {
      justify-content: space-evenly;
    }
  }

  .text-shadow {
    text-shadow: 0px 0px 4px;
  }

  .text-shadow-2 {
    text-shadow: 0px 0px 10px;
  }

  .text-shadow-pulse {
    animation: text-shadow-pulse 2.5s ease-in-out infinite;
  }

  @keyframes text-shadow-pulse {
    0%,
    100% {
      text-shadow: 0px 0px 4px;
    }
    50% {
      text-shadow: 0px 0px 20px;
    }
  }
`;
