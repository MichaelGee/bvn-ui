import {css} from '@emotion/react';

const breakpoints = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
}

export const mq = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {});