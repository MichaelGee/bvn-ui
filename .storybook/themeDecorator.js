import { Global, ThemeProvider } from '@emotion/react';

import React from 'react';
import globalStyle from '../src/GlobalStyles'
import { theme } from '../src/theme';

console.log(theme);

const ThemeDecorator = storyFn => (
      <ThemeProvider theme={theme}>
         <Global styles={globalStyle}/>
        {storyFn()}
      </ThemeProvider>
)
  
  export default ThemeDecorator;

