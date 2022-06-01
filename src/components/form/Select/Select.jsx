import { useState } from 'react';
import { useStore } from 'context/Store';
import Input from 'components/form/Input/Input';

const Select = ({ register, errors, options, placeholder, type, setValue }) => {
  const [isOpen, setisOpen] = useState(false);

  const [_state, dispatch] = useStore();

  const handleDropdown = () => {
    setisOpen(!isOpen);
  };

  const handleOption = (topic, id) => {
    dispatch({ type: 'SET_TOPIC', payload: id });
    setValue('topic', topic);
    handleDropdown();
  };

  return (
    <div className="select">
      <div className="select__input-container" onClick={handleDropdown} role="presentation">
        <Input
          register={register}
          className="new__input"
          name="topic"
          error={errors.topic}
          placeholder={placeholder}
          type={type}
          disabled={true}
        />
      </div>
      <div className={`select__dropdown ${isOpen ? '' : 'hidden'}`}>
        {options?.length &&
          options.map(option => (
            <div
              className="select__option"
              key={option.topic.id}
              onClick={() => handleOption(option.topic.label, option.topic.id)}
              role="presentation"
            >
              <img src={option.topic.icon} alt={option.topic.label} className="select__icon" />
              <p className="select__text">{option.topic.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Select;
