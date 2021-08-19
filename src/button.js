import React from 'react';
import propTypes from 'prop-types';
import styles from './component.module.css';

const Button = ({ label }) => <button type="button" className={styles.buton}>{label}</button>;

Button.propTypes = {
  label: propTypes.string.isRequired,
};

export default Button;
