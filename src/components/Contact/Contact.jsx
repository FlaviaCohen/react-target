import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useTranslation from 'hooks/useTranslation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContactMutation } from 'services/contact/contact';
import Input from 'components/form/Input/Input';
import Button from 'components/common/Button/Button';
import close from 'assets/close.svg';
import smiles from 'assets/smiles.svg';
import sad from 'assets/sad.svg';

const Contact = ({ isContactOpen, handleContact }) => {
  const [feedback, setFeedback] = useState({ success: false, loading: false, error: false });
  const [path, setPath] = useState('/');

  const t = useTranslation();
  const location = useLocation();

  const [contact, { isLoading, isSuccess, error }] = useContactMutation();
  const schema = z.object({
    email: z.string().email({ message: t('contact.errors.emailMsg') }),
    body: z.string().min(1, { message: t('contact.errors.required') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = data => {
    contact(data);
  };

  const handleFeedback = () => {
    if (isLoading) {
      setFeedback(prev => ({ ...prev, loading: true }));
    }
    if (isSuccess) {
      setFeedback(prev => ({ ...prev, loading: false, success: true }));
    }
    if (error) {
      setFeedback(prev => ({ ...prev, loading: false, error: true }));
    }
  };

  const checkLocation = () => {
    setPath(location.pathname);
  };

  useEffect(() => {
    checkLocation();
  }, []);

  useEffect(() => {
    handleFeedback();
  }, [isLoading, isSuccess, error]);

  return (
    <div
      className={`contact__container contact__container${
        path === '/login' || path === '/signup' ? '--full' : '--partial'
      } ${isContactOpen ? '' : 'hidden'}`}
    >
      <div
        className={`contact__content contact__content${
          path === '/login' || path === '/signup' ? '--full' : '--partial'
        }`}
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
        <img src={feedback.error ? sad : smiles} alt="smiles" className="contact__smiles" />
        {!feedback.success && !feedback.error && (
          <>
            <h1 className="contact__title mb-2">{t('contact.title')}</h1>
            <div
              className={`contact__form-container${
                path === '/login' || path === '/signup' ? '--full' : '--partial'
              }`}
            >
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
                  disabled={isLoading}
                />
                <label htmlFor="" className="form__label">
                  {t('contact.msgLabel')}*
                </label>
                <Input
                  className={`${errors.body ? 'input__textarea--error' : ''}`}
                  register={register}
                  name="body"
                  type="text"
                  error={errors.body}
                  errorClassName="input__custom-error"
                  isTextArea={true}
                  disabled={isLoading}
                />
                <div className="contact__btn-container">
                  <Button type="submit">
                    {isLoading ? t('contact.sendingBtn') : t('contact.sendBtn')}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
        {feedback.success && (
          <div className="contact__feedback">
            <h1 className="contact__title">{t('contact.feedback.successTitle')}</h1>
            <h2 className="contact__subtitle">{t('contact.feedback.successSubtitle')}</h2>
          </div>
        )}
        {feedback.error && (
          <div className="contact__feedback">
            <h1 className="contact__title">{t('contact.feedback.errorTitle')}</h1>
            <h2 className="contact__subtitle">{t('contact.feedback.errorSubtitle')}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
