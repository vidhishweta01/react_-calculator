import propTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ label }) => (
  <button type="button" className={styles.button}>
    { label }

  </button>
);

Button.propTypes = {
  label: propTypes.string.isRequired,
};

export default Button;
