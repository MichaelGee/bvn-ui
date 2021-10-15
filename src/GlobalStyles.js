import JostBlack from './assets/fonts/Jost-Black.ttf';
import JostBold from './assets/fonts/Jost-Bold.ttf';
import JostExtraBold from './assets/fonts/Jost-ExtraBold.ttf';
import JostExtraLight from './assets/fonts/Jost-ExtraLight.ttf';
import JostLight from './assets/fonts/Jost-ExtraLight.ttf';
import JostMedium from './assets/fonts/Jost-Medium.ttf';
import JostRegular from './assets/fonts/Jost-Regular.ttf';
import JostSemiBold from './assets/fonts/Jost-SemiBold.ttf';
import JostThin from './assets/fonts/Jost-Thin.ttf';
import {css} from '@emotion/react';

const globalStyle = css`
  @font-face {
    font-family: 'Jost';
    font-weight: 900;
    src: url(${JostBlack}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Jost';
    font-weight: 700;
    src: url(${JostBold}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Jost';
    font-weight: 800;
    src: url(${JostExtraBold}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Jost';
    font-weight: 200;
    src: url(${JostExtraLight}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Jost';
    font-weight: 300;
    src: url(${JostLight}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Jost';
    font-weight: 500;
    src: url(${JostMedium}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Jost';
    font-weight: 400;
    src: url(${JostRegular}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Jost';
    font-weight: 600;
    src: url(${JostSemiBold}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Jost';
    font-weight: 100;
    src: url(${JostThin}) format('truetype');
    font-display: swap;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Typography
 * *********************************** */

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
  }

  body {
    font-family: 'Jost', sans-serif;
    font-size: 1.6rem;
    line-height: 26px;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    color: #495057;
  }

  * {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  a,
  a:visited {
    // color: inherit;
  }

  /* Layout
 * *********************************** */

  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Elements
 * *********************************** */

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul {
    list-style: none;
  }

  img,
  video {
    max-width: 100%;
  }

  img {
    border-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }

  /* Attributes & states
 * *********************************** */

  [hidden] {
    display: none !important;
  }

  [disabled] {
    cursor: not-allowed;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Utility classes
 * *********************************** */

  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    left: -9999px;
    top: -9999px;
  }
`;

export default globalStyle;
