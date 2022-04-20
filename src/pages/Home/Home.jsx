import { Link } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';
import useTranslation from 'hooks/useTranslation';
import smiles from 'assets/smiles.svg';
import Map from 'components/common/Map/Map';

const Home = () => {
  const t = useTranslation();

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
        <div className="home__btn">
          <Link to={routesPaths.profile}>{t('home.gotItBtn')}</Link>
        </div>
      </div>
      <div className="home__map">
        <Map />
      </div>
    </div>
  );
};

export default Home;
