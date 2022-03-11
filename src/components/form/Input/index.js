import { string, func, object } from 'prop-types';

const Input = ({ register, type = 'text', name, error, handleFocus, placeholder = '' }) => (
  <div className="input__container">
    <input
      className="input__textbox"
      type={type}
      {...register(name)}
      placeholder={placeholder}
      onFocus={handleFocus}
    />
    <small className="input__error">{error?.message}</small>
  </div>
);

Input.propTypes = {
  register: func.isRequired,
  error: object,
  name: string,
  type: string,
};

export default Input;
