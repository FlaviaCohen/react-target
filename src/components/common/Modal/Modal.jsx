import Button from "components/common/Button/Button";

const Modal = ({ isOpen, title, action }) => {
  return (
    <div className={`modal ${isOpen ? '' : 'hidden'}`}>
      <div className="modal__content">
        <h1 className="modal__title">{title}</h1>
        <div className="modal__actions">
            <Button>{action}</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
