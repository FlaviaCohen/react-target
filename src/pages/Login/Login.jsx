import { useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { api } from 'services/api';
import { useLoginMutation } from 'services/auth/auth';
import useAuth from 'hooks/useAuth';
import useTranslation from 'hooks/useTranslation';
import routesPaths from 'routes/routesPaths';
import Input from 'components/form/Input/Input';
import Button from 'components/common/Button/Button';
import smiles from 'assets/smiles.svg';
import PhoneAppSection from '../../components/common/PhoneAppSection/PhoneAppSection';

const Login = () => {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [login, { isLoading, isSuccess, error }] = useLoginMutation();
  const { authenticated, user } = useAuth();

  const schema = z.object({
    email: z.string().email({ message: t('login.errors.emailMsg') }),
    password: z.string().min(1, { message: t('login.errors.passwordMsg') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = data => login(data);

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
    <div className="login">
      <div className="login__header">
        <img className="login__smiles" src={smiles} alt="smiling faces" />
        <h2 className="login__title">Target MVD</h2>
        <h3 className="login__subtitle">Find people near you & Connect</h3>
        <p className="login__paragraph">
          Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and
          start conecting with others who share your interest.
        </p>
      </div>
      <div className="login__form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className="form__label" htmlFor="email">
            {t('login.labels.email')}
          </label>
          <Input
            register={register}
            type="email"
            name="email"
            error={errors.email}
            handleFocus={handleFocus}
          />

          <label className="form__label" htmlFor="password">
            {t('login.labels.password')}
          </label>
          <Input
            register={register}
            type="password"
            name="password"
            error={errors.password}
            handleFocus={handleFocus}
          />

          {error && error.data && <p className="login__error">{error.data.errors}</p>}

          <Button type="submit" disabled={isLoading}>
            {t('login.title')}
          </Button>

          <Link className="form__link" to={routesPaths.signup}>
            {t('login.dontHaveAccountMsg')}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
