import useTranslation from 'hooks/useTranslation';
import { useForm } from 'react-hook-form';
import { useStore } from 'context/Store';
import { useAddTargetMutation } from 'services/target/target';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useGetTopicsQuery } from 'services/target/topics';
import Input from 'components/form/Input/Input';
import Select from 'components/form/Select/Select';
import Button from 'components/common/Button/Button';
import target from 'assets/target.svg';
import smiles from 'assets/smiles.svg';

const NewTarget = () => {
  const [state] = useStore();

  const t = useTranslation();

  const { data: topics = [] } = useGetTopicsQuery();

  const [addTarget, { isLoading, error }] = useAddTargetMutation();

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
    addTarget(target);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="new">
      <img src={target} alt="target" className="new__target-icon" />
      <p className="form__title">{t('newTarget.title')}</p>

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
              {isLoading ? t('newTarget.btnSaving') : t('newTarget.btn')}
            </Button>
          </div>
        </div>
      </form>
      {error && <p className="new__error">{t('newTarget.feedback.error')}</p>}
      <img src={smiles} alt="smiles" className="new__smiles" />
    </div>
  );
};

export default NewTarget;
