import React from 'react';
import propTypes from 'prop-types';
import Button from '../button';
import styles from './buttonPanel.module.css';

const Calculator = ({ clickHandler }) => (
  <div className="mainCalc">
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} color="gray" label="AC" />
      <Button handleClick={clickHandler} color="gray" label="+/-" />
      <Button handleClick={clickHandler} color="gray" label="%" />
      <Button handleClick={clickHandler} label="÷" />
    </div>
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} color="gray" label="7" />
      <Button handleClick={clickHandler} color="gray" label="8" />
      <Button handleClick={clickHandler} color="gray" label="9" />
      <Button handleClick={clickHandler} label="X" />
    </div>
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} color="gray" label="4" />
      <Button handleClick={clickHandler} color="gray" label="5" />
      <Button handleClick={clickHandler} color="gray" label="6" />
      <Button handleClick={clickHandler} label="-" />
    </div>
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} color="gray" label="1" />
      <Button handleClick={clickHandler} color="gray" label="2" />
      <Button handleClick={clickHandler} color="gray" label="3" />
      <Button handleClick={clickHandler} label="+" />
    </div>
    <div className={styles.button_row}>
      <Button handleClick={clickHandler} color="gray" label="0" />
      <Button handleClick={clickHandler} color="gray" label="." />
      <Button handleClick={clickHandler} label="=" />
    </div>
  </div>
);

Calculator.propTypes = {
  clickHandler: propTypes.func.isRequired,
};

// Export Calculator Component.
export default Calculator;
