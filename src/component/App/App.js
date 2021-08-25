import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Quote from '../Quote';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';
import calculate from '../../logic/calculate';
import Navbar from '../navbar';
import styles from './App.module.css';

const App = () => {
  const [{ total, next, operation }, setObj] = useState({ total: '', next: '', operation: '' });

  const handleClick = (buttonName) => {
    const res = calculate({ total, next, operation }, buttonName);
    setObj({ total: res.total, next: res.next, operation: res.operation });
  };

  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/quote" component={Quote} />
        <Route path="/calculator">
          <Navbar />
          <div className={styles.cal}>
            <h1> Let’s do some math! </h1>
            <div className={styles.calc}>
              <Display total={total} next={next} />
              <ButtonPanel clickHandler={handleClick} />
            </div>
          </div>
        </Route>
      </Switch>
    </main>
  );
};

export default App;
