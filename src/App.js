import {Global} from '@emotion/react';
import globalStyle from './GlobalStyles';
import Router from './Router';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'theme';
import './App.css';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
