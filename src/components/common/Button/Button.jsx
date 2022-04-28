import { func, bool, string } from 'prop-types';

const Button = ({ children, type = 'button', disabled, handleClick, className = '' }) => (
  <button className={`button ${className}`} onClick={handleClick} type={type} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  handleClick: func,
  disabled: bool,
  type: string,
};

export default Button;
