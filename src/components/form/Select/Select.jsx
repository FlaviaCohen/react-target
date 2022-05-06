import { useState } from 'react';
import { useStore } from 'context/Store';
import Input from 'components/form/Input/Input';

const Select = ({ register, errors, options, placeholder, type }) => {
  const [isOpen, setisOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const [, dispatch] = useStore();

  const handleDropdown = () => {
    setisOpen(!isOpen);
  };

  const handleOption = (topic, id) => {
    dispatch({ type: 'SET_TOPIC', payload: id });
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
          error={errors.topic}
          placeholder={placeholder}
          type={type}
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
