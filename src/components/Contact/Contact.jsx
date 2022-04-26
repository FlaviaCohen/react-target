import { useForm } from 'react-hook-form';
import useTranslation from 'hooks/useTranslation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from 'components/form/Input/Input';
import Button from 'components/common/Button/Button';
import close from 'assets/close.svg';
import smiles from 'assets/smiles.svg';

const Contact = ({ isContactOpen, handleContact }) => {
  const t = useTranslation();

  const schema = z.object({
    email: z.string().email({ message: t('contact.errors.emailMsg') }),
    message: z.string().min(1, { message: t('contact.errors.required') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = data => {
    console.log(data);
  };

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
        <div className="contact__form-container">
          <form className="form contact__form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="" className="form__label">
              {t('contact.emailLabel')}*
            </label>
            <Input
              className={`${errors.email ? 'input__textbox--error' : ''}`}
              register={register}
              name="email"
              type="text"
              error={errors.email}
            />
            <label htmlFor="" className="form__label">
              {t('contact.msgLabel')}*
            </label>
            <Input
              className={`${errors.message ? 'input__textarea--error' : ''}`}
              register={register}
              name="message"
              type="text"
              error={errors.message}
              errorClassName="input__custom-error"
              isTextArea={true}
            />
            <Button type="submit">{t('contact.sendBtn')}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
