import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { z } from 'zod';

import Input from 'components/form/Input';
import Button from 'components/common/Button';
import routesPaths from 'routes/routesPaths';
import useTranslation from 'hooks/useTranslation';
import useAuth from 'hooks/useAuth';
import { api } from 'services/api';
import { useSignupMutation } from 'services/auth/auth';
import { PASSWORD_REGEX } from 'constants/constants';
import PhoneAppSection from '../../components/common/PhoneAppSection/PhoneAppSection';

const Signup = () => {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { user, authenticated } = useAuth();
  const [signup, { isLoading, isSuccess, error }] = useSignupMutation();

  const schema = z
    .object({
      email: z.string().email({ message: t('signup.errors.emailMsg') }),
      password: z.string().regex(PASSWORD_REGEX, { message: t('signup.errors.passwordMsg') }),
      passwordConfirmation: z
        .string()
        .regex(PASSWORD_REGEX, { message: t('signup.errors.passwordMsg') }),
    })
    .refine(data => data.password === data.passwordConfirmation, {
      message: t('signup.errors.passwordConfirmationMsg'),
      path: ['passwordConfirmation'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = data => signup(data);

  const resetErrors = useCallback(() => dispatch(api.util.resetApiState()), [dispatch]);

  const handleFocus = () => error && resetErrors();

  useEffect(() => {
    if (isSuccess) {
      push(routesPaths.index);
    }
  }, [isSuccess, user, push]);

  useEffect(() => resetErrors, [resetErrors]);

  if (authenticated) {
    return <Redirect to={routesPaths.index} />;
  }

  return (
    <div className="signUp">
      <div className="signUp__left">
        <form className="signUp__form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <h1 className="signUp__title">{t('signup.title')}</h1>

          <label className="signUp__label" htmlFor="name">
            {t('signup.labels.name')}
          </label>
          <Input
            register={register}
            type="name"
            name="name"
            error={errors.name}
            handleFocus={handleFocus}
          />

          <label className="signUp__label" htmlFor="email">
            {t('signup.labels.email')}
          </label>
          <Input
            register={register}
            type="email"
            name="email"
            error={errors.email}
            handleFocus={handleFocus}
          />

          <label className="signUp__label" htmlFor="password">
            {t('signup.labels.password')}
          </label>
          <Input
            register={register}
            type="password"
            name="password"
            error={errors.password}
            handleFocus={handleFocus}
            placeholder="min. 6 characters long"
          />

          <label className="signUp__label" htmlFor="password">
            {t('signup.labels.passwordConfirmation')}
          </label>
          <Input
            register={register}
            type="password"
            name="passwordConfirmation"
            error={errors.passwordConfirmation}
            handleFocus={handleFocus}
          />

          {error && error.data && (
            <p className="error-message">{error.data.errors?.full_messages[0]}</p>
          )}

          <Button type="submit" disabled={isLoading}>
            {t('signup.title')}
          </Button>
          <Link to={routesPaths.login} className="signUp__link">
            {t('signup.alreadyHaveAccount')}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
