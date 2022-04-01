import hamburger from 'assets/hamburger_icon.svg';

const Header = () => (
  <header className="header">
    <img src={hamburger} alt="menu icon" className="header__icon--hamburger" />
  </header>
);

export default Header;
