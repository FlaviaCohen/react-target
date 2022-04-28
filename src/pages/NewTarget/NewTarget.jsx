import Input from 'components/form/Input/Input';
import Button from 'components/common/Button/Button';
import target from 'assets/target.svg';
import smiles from 'assets/smiles.svg';

const NewTarget = () => {
  return (
    <div className="new">
      <img src={target} alt="target" className="new__target-icon" />
      <p className="new__title">Create new target</p>

      <form className="form">
        <label htmlFor="area" className="form__label">
          Specify area length
        </label>
        <Input name="area"></Input>
        <label htmlFor="title" className="form__label">
          Target title
        </label>
        <Input name="title"></Input>
        <label htmlFor="topic" className="form__label">
          Select a topic
        </label>
        <select name="topic" className="new__select">
          <optiion className="new__option"></optiion>
        </select>
        <Button>Save target</Button>
      </form>
      <img src={smiles} alt="smiles" className="new__smiles" />
    </div>
  );
};

export default NewTarget;
