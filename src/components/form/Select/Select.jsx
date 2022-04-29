import { useState } from 'react';
import Input from '../Input/Input';

const Select = ({ register, error, handleFocus, options }) => {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="select">
      <div
        className="select__input-container"
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex={0}
      >
        <Input register={register} name="topic" />
      </div>
      <div className={`select__dropdown ${isOpen ? '' : 'hidden'}`}>
        {options.length &&
          options.map(option => (
            <div className="select__option" key={option.text}>
              <img src={option.icon} alt="" className="select__icon" />
              <p className="select__text">{option.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Select;
