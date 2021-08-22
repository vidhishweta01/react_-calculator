import React from 'react';
import propTypes from 'prop-types';
import Button from '../button';
import styles from './buttonPanel.module.css';

const Calculator = ({ clickHandler }) => (
  <div className="mainCalc">
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} label="AC" />
      <Button handleClick={clickHandler} label="+/-" />
      <Button handleClick={clickHandler} label="%" />
      <Button handleClick={clickHandler} label="÷" />
    </div>
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} label="7" />
      <Button handleClick={clickHandler} label="8" />
      <Button handleClick={clickHandler} label="9" />
      <Button handleClick={clickHandler} label="X" />
    </div>
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} label="4" />
      <Button handleClick={clickHandler} label="5" />
      <Button handleClick={clickHandler} label="6" />
      <Button handleClick={clickHandler} label="-" />
    </div>
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} label="1" />
      <Button handleClick={clickHandler} label="2" />
      <Button handleClick={clickHandler} label="3" />
      <Button handleClick={clickHandler} label="+" />
    </div>
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} label="0" />
      <Button handleClick={clickHandler} label="." />
      <Button handleClick={clickHandler} label="=" />
    </div>
  </div>
);

Calculator.propTypes = {
  clickHandler: propTypes.func.isRequired,
};

// Export Calculator Component.
export default Calculator;
