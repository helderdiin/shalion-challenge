import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
  :root {
    --toastify-toast-width: auto;
    --toastify-color-error: #DF5060;
    --toastify-color-success: #75BF72;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #eee;
    color: #0D1F3C;
    font-family: 'Open Sans', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
  input, button {
    font-family: 'Open Sans', sans-serif;
  }
  button {
    cursor: pointer;
  }
  @-webkit-keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @-moz-keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  &.MuiTypography-root {
    font-family: 'Open Sans', sans-serif;
  }
`;
