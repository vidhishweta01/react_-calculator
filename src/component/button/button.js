import propTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ label, clickHandler }) => (
  <button type="button" className={styles.button} onClick={clickHandler(label)}>
    { label }

  </button>
);

Button.propTypes = {
  label: propTypes.string.isRequired,
  clickHandler: propTypes.func.isRequired,
};

export default Button;
