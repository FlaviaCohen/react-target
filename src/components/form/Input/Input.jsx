import { string, func, object } from 'prop-types';

const Input = ({
  register,
  type = 'text',
  name,
  error,
  handleFocus,
  placeholder = '',
  className,
  errorClassName,
  isTextArea,
  disabled,
}) => (
  <div className="input__container">
    {isTextArea ? (
      <textarea
        className={`input__textarea ${className ? className : ''}`}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        onFocus={handleFocus}
        disabled={disabled}
      ></textarea>
    ) : (
      <input
        className={`input__textbox ${className ? className : ''}`}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        onFocus={handleFocus}
        disabled={disabled}
      />
    )}

    <small className={`input__error ${errorClassName ? errorClassName : ''}`}>
      {error?.message}
    </small>
  </div>
);

Input.propTypes = {
  register: func.isRequired,
  error: object,
  name: string,
  type: string,
};

export default Input;
