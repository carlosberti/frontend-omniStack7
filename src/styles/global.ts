import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background-color: #fafafa;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
