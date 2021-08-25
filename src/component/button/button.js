import propTypes from 'prop-types';
import './button.css';

const Button = ({ label, handleClick, color }) => {
  const clickHandler = () => handleClick(label);
  return (
    <button type="button" className={`button ${color}`} onClick={clickHandler}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
  color: propTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
