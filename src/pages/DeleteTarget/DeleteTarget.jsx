import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from 'context/Store';
import useTranslation from 'hooks/useTranslation';
import { useDeleteTargetMutation } from 'services/target/target';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from 'components/form/Input/Input';
import Button from 'components/common/Button/Button';

const DeleteTarget = () => {
  const [values, setValues] = useState({ area: 0, title: '' });

  const t = useTranslation();

  const [state] = useStore();

  const [deleteTarget, { isLoading, error }] = useDeleteTargetMutation();

  const schema = z.object({
    area: z.string().min(1, { message: t('deleteTarget.errors') }),
    title: z.string().min(1, { message: t('deleteTarget.errors') }),
  });

  const onSubmit = () => {
    deleteTarget(state.selectedTarget.id);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    setValues({ area: state.selectedTarget.radius, title: state.selectedTarget.title });
  }, [state]);

  return (
    <div className="delete">
      <p className="form__title">{t('deleteTarget.title')}</p>
      <form className="delete__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="area" className="form__label">
          {t('deleteTarget.labels.area')}
        </label>
        <Input
          register={register}
          error={errors.area}
          name="area"
          className="new__input"
          type="number"
          value={values.area}
        />
        <label htmlFor="title" className="form__label">
          {t('deleteTarget.labels.title')}
        </label>
        <Input
          register={register}
          error={errors.title}
          name="title"
          className="new__input"
          type="text"
          value={values.title}
        />
        <div className="delete__btns">
          <Button type="submit" className="delete__btn--red">
            {isLoading ? t('deleteTarget.btns.deleting') : t('deleteTarget.btns.delete')}
          </Button>
          <Button disabled={true} className="delete__btn">
            {t('deleteTarget.btns.save')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DeleteTarget;
