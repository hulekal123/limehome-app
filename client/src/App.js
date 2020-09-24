import React from 'react';
import {DisplayMapClass} from './components/DisplayMapClass.js';
import {NavBar} from './components/NavBar.js';

function App() {
  return (
    <div>
    <NavBar/>
    <div>
      <DisplayMapClass/>
    </div>
  </div> 
  );
}

export default App;
