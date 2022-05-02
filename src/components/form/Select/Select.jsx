import { useState } from 'react';
import Input from 'components/form/Input/Input';

const Select = ({ register, error = false, handleFocus, options, handleChange }) => {
  const [isOpen, setisOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const handleDropdown = () => {
    setisOpen(!isOpen);
  };

  const handleOption = topic => {
    setSelected(topic);
    handleDropdown();
  };

  return (
    <div className="select">
      <div className="select__input-container" onClick={handleDropdown} role="presentation">
        <Input
          register={register}
          className="new__input"
          name="topic"
          value={selected}
          error={error}
          disabled={true}
        />
      </div>
      <div className={`select__dropdown ${isOpen ? '' : 'hidden'}`}>
        {options.length &&
          options.map((option, key) => (
            <div
              className="select__option"
              key={key}
              onClick={() => handleOption(option.text)}
              role="presentation"
            >
              <img src={option.icon} alt={option.text} className="select__icon" />
              <p className="select__text">{option.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Select;
