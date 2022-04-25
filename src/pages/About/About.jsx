import { Link } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';
import useTranslation from 'hooks/useTranslation';
import smiles from 'assets/smiles.svg';

const About = () => {
  const t = useTranslation();

  return (
    <div className="about">
      <img src={smiles} alt="smiles" className="about__smiles" />
      <h1 className="about__title">{t('about.title')}</h1>
      <p className="about__paragraph">{t('about.paragraph')}</p>

      <Link to={routesPaths.login} className="about__btn">
        {t('about.btn')}
      </Link>
    </div>
  );
};

export default About;
