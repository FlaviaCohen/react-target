import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from 'context/Store';
import useTranslation from 'hooks/useTranslation';
import { useDeleteTargetMutation } from 'services/target/target';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from 'components/form/Input/Input';
import Button from 'components/common/Button/Button';
import Modal from 'components/common/Modal/Modal';

const DeleteTarget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslation();

  const [state] = useStore();

  const [deleteTarget, { isLoading }] = useDeleteTargetMutation();

  const schema = z.object({
    area: z.number().min(1, { message: t('deleteTarget.errors') }),
    title: z.string().min(1, { message: t('deleteTarget.errors') }),
  });

  const handleClick = () => {
    deleteTarget(state.selectedTarget.id);
    setIsOpen(false);
    setValue('area', null);
    setValue('title', '');
  };

  const onSubmit = () => {
    setIsOpen(true);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleChange = useCallback(() => {
    const { radius, title } = state.selectedTarget;
    setValue('area', radius);
    setValue('title', title);
  }, [setValue, state]);

  useEffect(() => {
    handleChange();
  }, [handleChange, state]);

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
          disabled={true}
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
          disabled={true}
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
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={t('deleteTarget.modal.title')}
        btn={t('deleteTarget.modal.btn')}
        handleClick={handleClick}
      />
    </div>
  );
};

export default DeleteTarget;
