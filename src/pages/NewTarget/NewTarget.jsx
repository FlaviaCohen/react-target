import useTranslation from 'hooks/useTranslation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from 'components/form/Input/Input';
import Select from 'components/form/Select/Select';
import Button from 'components/common/Button/Button';
import target from 'assets/target.svg';
import football from 'assets/football.svg';
import travel from 'assets/travel.svg';
import politics from 'assets/politics.svg';
import art from 'assets/art.svg';
import dating from 'assets/dating.svg';
import music from 'assets/music.svg';
import movies from 'assets/movies.svg';
import series from 'assets/series.svg';
import food from 'assets/food.svg';
import smiles from 'assets/smiles.svg';

const NewTarget = () => {
  const topics = [
    { text: 'Football', icon: football },
    { text: 'Travel', icon: travel },
    { text: 'Politics', icon: politics },
    { text: 'Art', icon: art },
    { text: 'Dating', icon: dating },
    { text: 'Music', icon: music },
    { text: 'Movies', icon: movies },
    { text: 'Series', icon: series },
    { text: 'Food', icon: food },
  ];

  const t = useTranslation();

  const schema = z.object({
    area: z.string({ message: t('newTarget.errors') }),
    title: z.string({ message: t('newTarget.errors') }),
    topic: z.string({ message: t('newTarget.errors') }),
  });

  const onSubmit = data => {
    console.log(data);
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

      <form className="new__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="area" className="form__label new__label">
          {t('newTarget.labels.area')}
        </label>
        <Input register={register} error={errors.area} name="area" className="new__input" />
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
            options={topics}
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
