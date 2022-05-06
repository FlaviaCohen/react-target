//import { useState, useEffect } from 'react';
import useTranslation from 'hooks/useTranslation';
import { useForm } from 'react-hook-form';
import { useStore } from 'context/Store';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTopicsQuery } from 'services/target/topics';
import Input from 'components/form/Input/Input';
import Select from 'components/form/Select/Select';
import Button from 'components/common/Button/Button';
import target from 'assets/target.svg';
import smiles from 'assets/smiles.svg';

const NewTarget = () => {
  const [state] = useStore();

  const t = useTranslation();

  const schema = z.object({
    area: z.string().min(1, { message: t('newTarget.errors') }),
    title: z.string().min(1, { message: t('newTarget.errors') }),
    topic: z.string().min(1, { message: t('newTarget.errors') }),
  });

  const { data: topics = [] } = useTopicsQuery();

  const onSubmit = data => {
    const newTarget = {
      radius: parseInt(data.target[0].value),
      title: data.target[1].value,
      lat: state.coordinates.lat,
      lng: state.coordinates.lng,
      topic_id: state.topic,
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="new">
      <img src={target} alt="target" className="new__target-icon" />
      <p className="new__title">{t('newTarget.title')}</p>

      <form
        className="new__form"
        onSubmit={e => {
          e.preventDefault();
          console.log(e);
          handleSubmit(onSubmit);
        }}
      >
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
          />
        </div>
        <div className="new__btn-container--fullwidth">
          <div className="new__btn-container">
            <Button type="submit">Save target</Button>
          </div>
        </div>
      </form>

      <img src={smiles} alt="smiles" className="new__smiles" />
    </div>
  );
};

export default NewTarget;
