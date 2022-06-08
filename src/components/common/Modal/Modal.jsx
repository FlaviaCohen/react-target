import Button from 'components/common/Button/Button';
import close from 'assets/close.svg';

const Modal = ({ isOpen, title, action, setIsOpen }) => {

  return (
    <div className={`modal ${isOpen ? '' : 'hidden'}`}>
      <div className="modal__content">
        <img src={close} alt="close" role="presentation" />
        <h1 className="modal__title">{title}</h1>
        <div className="modal__actions">
          <Button className="modal__btn">{action}</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
