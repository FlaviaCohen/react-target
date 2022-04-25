import close from 'assets/close.svg';

const Contact = ({ isContactOpen, handleContact }) => {
  return (
    <div
      className={`contact ${isContactOpen ? '' : 'hidden'}`}
      onClick={handleContact}
      onKeyPress={handleContact}
      role="button"
      tabIndex={0}
    >
      <div
        className="contact__close"
        onClick={handleContact}
        onKeyPress={handleContact}
        role="button"
        tabIndex={0}
      >
        <img src={close} alt="close" />
      </div>
      Contact Modal
    </div>
  );
};

export default Contact;
