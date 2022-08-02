import { createGlobalStyle } from 'styled-components';
import { colors, breakpoints } from './variables';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    overflow-x: hidden;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    font-size: 18px;
    @media screen and (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  body {
    background-color: ${colors.darkGrey};
    color: ${colors.lightGrey};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  
  .full-wrap  {
    margin: 0 60px;
    @media screen and (max-width: ${breakpoints.phone}) {
      margin: 0 35px;
    }
  }
  

  @font-face {
    font-family: 'Open Sans';
    font-weight: 1 999;
    src: url('/fonts/OpenSans-VariableFont.ttf') format('truetype-variations');
  }

  @font-face {
    font-family: 'Oswald';
    font-weight: 1 999;
    src: url('/fonts/Oswald-VariableFont.ttf') format('truetype-variations');
  }
`;

export default GlobalStyle;
