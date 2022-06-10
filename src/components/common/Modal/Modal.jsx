import Button from 'components/common/Button/Button';
import close from 'assets/close.svg';

const Modal = ({ isOpen, title, btn, setIsOpen, handleClick }) => {
  return (
    <div className={`modal ${isOpen ? '' : 'hidden'}`}>
      <div className="modal__content">
        <div className="modal__close">
          <img src={close} alt="close" role="presentation" onClick={() => setIsOpen(false)} />
        </div>
        <h1 className="modal__title">{title}</h1>
        <div className="modal__actions">
          <Button className="modal__btn" handleClick={handleClick}>
            {btn}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
