import Input from 'components/form/Input/Input';
import Button from 'components/common/Button/Button';
import target from 'assets/target.svg';
import smiles from 'assets/smiles.svg';

const NewTarget = () => {
  return (
    <div className="new">
      <img src={target} alt="target" className="new__target-icon" />
      <p className="new__title">Create new target</p>

      <form className="new__form">
        <label htmlFor="area" className="form__label new__label">
          Specify area length
        </label>
        {/* <Input name="area"></Input> */}
        <label htmlFor="title" className="form__label new__label">
          Target title
        </label>
        {/*  <Input name="title"></Input> */}
        <label htmlFor="topic" className="form__label new__label">
          Select a topic
        </label>
        <select name="topic" className="new__select">
          <option className="new__option"></option>
        </select>
        <div className="new__btn-container--fullwidth">
          <div className="new__btn-container">
            <Button>Save target</Button>
          </div>
        </div>
      </form>

      <img src={smiles} alt="smiles" className="new__smiles" />
    </div>
  );
};

export default NewTarget;
