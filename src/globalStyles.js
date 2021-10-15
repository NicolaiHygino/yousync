import { createGlobalStyle } from 'styled-components';

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
  }
`;