import { useState, useEffect, useCallback } from 'react';
import useTranslation from 'hooks/useTranslation';
import { useForm } from 'react-hook-form';
import { useStore } from 'context/Store';
import { useNewTargetMutation } from 'services/target/newTarget';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTopicsQuery } from 'services/target/topics';
import Input from 'components/form/Input/Input';
import Select from 'components/form/Select/Select';
import Button from 'components/common/Button/Button';
import target from 'assets/target.svg';
import smiles from 'assets/smiles.svg';

const NewTarget = () => {
  const [feedback, setFeedback] = useState({ success: false, loading: false, error: false });

  const [state] = useStore();

  const t = useTranslation();

  const { data: topics = [] } = useTopicsQuery();

  const [newTarget, { isLoading, isSuccess, error }] = useNewTargetMutation();

  const schema = z.object({
    area: z.string().min(1, { message: t('newTarget.errors') }),
    title: z.string().min(1, { message: t('newTarget.errors') }),
    topic: z.string().min(1, { message: t('newTarget.errors') }),
  });

  const onSubmit = data => {
    const target = {
      radius: parseInt(data.area),
      title: data.title,
      lat: state.coordinates.lat,
      lng: state.coordinates.lng,
      topic_id: state.topic,
    };
    newTarget(target);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleFeedback = useCallback(() => {
    if (isLoading) {
      setFeedback(prev => ({ ...prev, loading: true }));
    }
    if (isSuccess) {
      setFeedback(prev => ({ ...prev, loading: false, success: true }));
    }
    if (error) {
      setFeedback(prev => ({ ...prev, loading: false, error: true }));
    }
  }, [isLoading, isSuccess, error]);

  useEffect(() => {
    handleFeedback();
  }, [handleFeedback]);

  return (
    <div className="new">
      <img src={target} alt="target" className="new__target-icon" />
      <p className="new__title">{t('newTarget.title')}</p>

      <form className="new__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="area" className="form__label new__label">
          {t('newTarget.labels.area')}
        </label>
        <Input
          register={register}
          error={errors.area}
          name="area"
          className="new__input"
          type="number"
        />
        <label htmlFor="title" className="form__label new__label">
          {t('newTarget.labels.title')}
        </label>
        <Input
          register={register}
          error={errors.title}
          name="title"
          className="new__input"
          placeholder={t('newTarget.placeholder.title')}
        />
        <label htmlFor="topic" className="form__label new__label">
          {t('newTarget.labels.topic')}
        </label>
        <div className="new__select">
          <Select
            register={register}
            options={topics.topics}
            errors={errors}
            placeholder={t('newTarget.placeholder.topic')}
            setValue={setValue}
          />
        </div>
        <div className="new__btn-container--fullwidth">
          <div className="new__btn-container">
            <Button type="submit">
              {feedback.loading ? t('newTarget.btnSaving') : t('newTarget.btn')}
            </Button>
          </div>
        </div>
      </form>
      {error && <p className="new__error">{error.data.errors.user[0]}</p>}
      <img src={smiles} alt="smiles" className="new__smiles" />
    </div>
  );
};

export default NewTarget;
