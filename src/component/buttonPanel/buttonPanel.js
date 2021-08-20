import React from 'react';
import Button from '../button';
import styles from './buttonPanel.module.css';

const Calculator = () => (
  <div className="mainCalc">
    <input className={styles.input} type="text" placeholder="0" />
    <div className={styles.button_row}>
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="÷" />
    </div>
    <div className={styles.button_row}>
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="x" />
    </div>
    <div className={styles.button_row}>
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" />
    </div>
    <div className={styles.button_row}>
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" />
    </div>
    <div className={styles.button_row}>
      <Button label="0" />
      <Button label="." />
      <Button label="=" />
    </div>
  </div>
);

// Export Calculator Component.
export default Calculator;
