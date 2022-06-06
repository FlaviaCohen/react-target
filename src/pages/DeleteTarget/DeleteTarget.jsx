import useTranslation from 'hooks/useTranslation';
import { useForm } from 'react-hook-form';
import Input from 'components/form/Input/Input';
import Button from 'components/common/Button/Button';

const DeleteTarget = () => {
  const t = useTranslation();

  return (
    <div className="delete">
      <p className="form__title">{t('deleteTarget.title')}</p>
      <form></form>
    </div>
  );
};

export default DeleteTarget;
