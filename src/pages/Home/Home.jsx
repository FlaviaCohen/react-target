import Button from 'components/common/Button/Button';
import useTranslation from 'hooks/useTranslation';
import { useLogoutMutation } from 'services/auth/auth';
import smiles from '../../assets/smiles.svg';
import Map from 'components/common/Map/Map';

const Home = () => {
  const t = useTranslation();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = () => logout().then(() => localStorage.removeItem('user'));

  return (
    <div className="home">
      <div className="home__welcome">
        <img className="home__smiles" src={smiles} alt="smiles" />
        <h1 className="home__message">{t('home.welcomeMsg')}</h1>
        <h2 className="home__title">{t('home.title')}</h2>
        <ul className="home__list">
          <li className="home__item">{t('home.descriptionItem1')}</li>
          <li className="home__item">{t('home.descriptionItem2')}</li>
        </ul>
        <div className="home__logout">
          <Button handleClick={handleLogout} disabled={isLoading}>
            {t('home.logoutBtn')}
          </Button>
        </div>
      </div>
      <div className="home__map">
        <Map />
      </div>
    </div>
  );
};

export default Home;
