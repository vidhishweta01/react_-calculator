import React from 'react';
import styles from './App.module.css';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';

function App() {
  return (
    <>
      <div className={styles.App}>
        <Display />
        <ButtonPanel />
      </div>
    </>
  );
}

export default App;
