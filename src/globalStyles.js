import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-gray: #202020;
    --main-red: #FF0000;
    --black-gray: #121212;
    --bg-color: #181818;
    --lines: #2c2c2c;
    --span-text: #aaa;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: var(--bg-color);
    color: white;
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  img {
    display: block;
    image-rendering: optimizeSpeed;             /*                     */
    image-rendering: -moz-crisp-edges;          /* Firefox             */
    image-rendering: -o-crisp-edges;            /* Opera               */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and Safari) */
    image-rendering: pixelated;                 /* Chrome as of 2019   */
    image-rendering: optimize-contrast;         /* CSS3 Proposed       */
    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                */
  }
`;

export const Content = styled.section`
  height: 100%;
  padding: 10px;
`;
