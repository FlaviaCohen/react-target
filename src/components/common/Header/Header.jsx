import { useState } from 'react';
import { Link } from 'react-router-dom';
import routesPaths from 'routes/routesPaths';
import hamburger from 'assets/hamburger.svg';
import close from 'assets/close.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div
        className="header__icon-container"
        onClick={handleClick}
        role="button"
        onKeyPress={handleClick}
        tabIndex={0}
      >
        <img src={isOpen ? close : hamburger} alt="menu icon" className="header__icon" />
      </div>
      {isOpen && (
        <div className="header__menu">
          <ul className="header__nav">
            <li className="header__item">
              <Link to={routesPaths.about}>About</Link>
            </li>
            <li className="header__item">
              <Link to={routesPaths.contact}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
