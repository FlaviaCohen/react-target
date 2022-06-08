import { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';
import Contact from 'components/Contact/Contact';
import useTranslation from 'hooks/useTranslation';
import hamburger from 'assets/hamburger.svg';
import close from 'assets/close.svg';
import back from 'assets/back.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const t = useTranslation();
  const location = useLocation();
  const history = useHistory();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <header
      className={`header ${
        location.pathname == '/new-target' || location.pathname === '/delete-target'
          ? 'bg-lb'
          : 'bg-w'
      }`}
    >
      {location.pathname === '/new-target' || location.pathname === '/delete-target' ? (
        <div className="header__actions">
          <img
            src={back}
            alt="go back"
            className="header__icon"
            onClick={() => history.goBack()}
            role="presentation"
          />
          <h1 className="header__title">
            {location.pathname === '/new-target' ? t('header.newTarget') : t('header.deleteTarget')}
          </h1>
        </div>
      ) : (
        <div
          className="header__icon-container"
          role="button"
          onClick={handleClick}
          onKeyPress={handleClick}
          tabIndex={0}
        >
          <img src={isOpen ? close : hamburger} alt="menu icon" className="header__icon" />
        </div>
      )}
      {isOpen && (
        <div className="header__menu">
          <div className="header__nav">
            <div className="header__item">
              <Link to={routesPaths.about}>{t('header.about')}</Link>
            </div>
            <button
              className="header__item"
              onClick={handleContact}
              onKeyPress={handleContact}
              tabIndex={0}
            >
              {t('header.contact')}
            </button>
          </div>
        </div>
      )}
      {isContactOpen && <Contact isContactOpen={isContactOpen} handleContact={handleContact} />}
    </header>
  );
};

export default Header;
