import { Global } from '@emotion/react';
import globalStyle from './GlobalStyles'

function App() {
  return (
    <div >
       <Global styles={globalStyle}/> 
    </div>
  );
}

export default App;
