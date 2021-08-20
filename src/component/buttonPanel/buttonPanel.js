import React from 'react';
import Button from '../button';
import styles from './buttonPanel.module.css';

const Calculator = (handleClick) => (
  <div className="mainCalc">
    <div className={styles.button_row}>
      <Button label="AC" clickHandler={handleClick} />
      <Button label="+/-" clickHandler={handleClick} />
      <Button label="%" clickHandler={handleClick} />
      <Button label="÷" clickHandler={handleClick}/>
    </div>
    <div className={styles.button_row}>
      <Button label="7" clickHandler={handleClick} />
      <Button label="8" clickHandler={handleClick} />
      <Button label="9" clickHandler={handleClick} />
      <Button label="x" clickHandler={handleClick} />
    </div>
    <div className={styles.button_row}>
      <Button label="4" clickHandler={handleClick} />
      <Button label="5" clickHandler={handleClick} />
      <Button label="6" clickHandler={handleClick} />
      <Button label="-" clickHandler={handleClick} />
    </div>
    <div className={styles.button_row}>
      <Button label="1" clickHandler={handleClick} />
      <Button label="2" clickHandler={handleClick} />
      <Button label="3" clickHandler={handleClick} />
      <Button label="+" clickHandler={handleClick} />
    </div>
    <div className={styles.button_row}>
      <Button label="0" clickHandler={handleClick} />
      <Button label="." clickHandler={handleClick} />
      <Button label="=" clickHandler={handleClick} />
    </div>
  </div>
);

// Export Calculator Component.
export default Calculator;
