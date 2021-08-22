import propTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ label, handleClick }) => {
  const clickHandler = () => handleClick(label);
  return (
    <button type="button" className={styles.button} onClick={clickHandler}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Button;
