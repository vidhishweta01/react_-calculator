import propTypes from 'prop-types';
import './button.css';

const Button = ({
  label, handleClick, color, width,
}) => {
  const clickHandler = () => handleClick(label);
  return (
    <button type="button" className={`button ${color} ${width}`} onClick={clickHandler}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
  color: propTypes.string,
  width: propTypes.string,
};

Button.defaultProps = {
  color: 'orange',
  width: 'normal',
};

export default Button;
