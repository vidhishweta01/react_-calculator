import React from 'react';
import './App.module.css';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';

function App() {
  return (
    <React.Fragment className="App">
      <Display />
      <ButtonPanel />
    </React.Fragment>
  );
}

export default App;
