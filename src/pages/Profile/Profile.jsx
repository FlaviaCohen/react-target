import useTranslation from 'hooks/useTranslation';
import { useLogoutMutation } from 'services/auth/auth';
import useAuth from 'hooks/useAuth';
import profile from 'assets/profile.svg';
import smiles from 'assets/smiles.svg';
import football from 'assets/football.svg';
import travel from 'assets/travel.svg';
import music from 'assets/music.svg';

const Profile = () => {
  const t = useTranslation();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = () => logout().then(() => localStorage.removeItem('user'));

  const { user } = useAuth();

  const { avatar, username } = user;

  return (
    <div className="profile">
      <h1 className="profile__title">Target</h1>
      <img src={avatar?.url || profile} alt="" className="profile__picture" />
      <p className="profile__nickname">{username}</p>
      <div className="profile__actions">
        <a href="/profile" className="profile__edit">
          Edit
        </a>
        <span className="profile__slash">/</span>

        <button className="profile__logout" onClick={handleLogout} disabled={isLoading}>
          {t('home.logoutBtn')}
        </button>
      </div>
      <span className="profile__separator" />
      <h2 className="profile__subtitle">
        Create your first target by clicking wherever on the map.
      </h2>
      <p className="profile__coment">Psss!, these are the most popular targets:</p>
      <div className="profile__list">
        <div className="list__item">
          <img src={football} alt="football bullet" className="list__bullet" />
          <p className="list__text">Football</p>
        </div>
        <div className="list__item">
          <img src={travel} alt="travel bullet" className="list__bullet" />
          <p className="list__text">Travel</p>
        </div>
        <div className="list__item">
          <img src={music} alt="music bullet" className="list__bullet" />
          <p className="list__text">Music</p>
        </div>
      </div>
      <img src={smiles} alt="smiles" className="profile__smiles" />
    </div>
  );
};

export default Profile;
