import Input from 'components/form/Input/Input';
import Button from 'components/common/Button/Button';
import useTranslation from 'hooks/useTranslation';
import close from 'assets/close.svg';
import smiles from 'assets/smiles.svg';

const Contact = ({ isContactOpen, handleContact }) => {
  const t = useTranslation();

  return (
    <div className={`contact ${isContactOpen ? '' : 'hidden'}`}>
      <div className="contact__content">
        <div
          className="contact__close"
          onClick={handleContact}
          onKeyPress={handleContact}
          role="button"
          tabIndex={0}
        >
          <img src={close} alt="close" />
        </div>
        <img src={smiles} alt="smiles" className="contact__smiles" />
        <h1 className="contact__title">{t('contact.title')}</h1>
        <form action="" className="form contact__form">
          <label htmlFor="" className="form__label">
            {t('contact.emailLabel')}*
          </label>
          {/*    <Input name="email" type="text" /> */}
          <label htmlFor="" className="form__label">
            {t('contact.msgLabel')}*
          </label>
          {/*           <Input name="message" type="text" /> */}
          <Button>{t('contact.sendBtn')}</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
