import useTranslation from 'hooks/useTranslation';
import { useForm } from 'react-hook-form';
import { useGetTopicsQuery } from 'services/target/topics';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from 'components/form/Input/Input';
import Select from 'components/form/Select/Select';
import Button from 'components/common/Button/Button';

const DeleteTarget = () => {
  const t = useTranslation();

  const { data: topics = [] } = useGetTopicsQuery();

  const schema = z.object({
    area: z.string().min(1, { message: t('deleteTarget.errors') }),
    title: z.string().min(1, { message: t('deleteTarget.errors') }),
    topic: z.string().min(1, { message: t('deleteTarget.errors') }),
  });

  const onSubmit = () => {
    // TODO
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

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
        />
        <label htmlFor="topic" className="form__label">
          {t('deleteTarget.labels.topic')}
        </label>
        <div className="delete__select">
          <Select register={register} options={topics.topics} errors={errors} />
        </div>
        <div className="delete__btns">
          <Button>{t('deleteTarget.btns.delete')}</Button>
          <Button>{t('deleteTarget.btns.save')}</Button>
        </div>
      </form>
    </div>
  );
};

export default DeleteTarget;
