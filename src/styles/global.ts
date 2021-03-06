import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(#cb208e, #6c14cf);
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    min-height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  button {
    cursor: pointer;
  }

`
