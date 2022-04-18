import Button from 'components/common/Button/Button';
import useTranslation from 'hooks/useTranslation';
import { useLogoutMutation } from 'services/auth/auth';
import useAuth from 'hooks/useAuth';
import profile from 'assets/profile.svg';
import smiles from 'assets/smiles.svg';
const Profile = () => {
  const t = useTranslation();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = () => logout().then(() => localStorage.removeItem('user'));

  const { user } = useAuth();

  return (
    <div className="profile">
      <h1 className="profile__title">Target</h1>
      <img src={profile} alt="" className="profile__picture" />
      <p className="profile__nickname">cbrum</p>
      <div className="profile__actions">
        <a href="/" className="profile__edit">
          Edit
        </a>
        <div className="profile__logout">
          <Button handleClick={handleLogout} disabled={isLoading}>
            {t('home.logoutBtn')}
          </Button>
        </div>
      </div>
      <span className="profile__separator" />
      <h2 className="profile__subtitle">
        Create your first target by clicking wherever on the map.
      </h2>
      <p className="profile__coment">Psss!, these are the most popular targets:</p>
      <ul className="profile__list">
        <li className="profile__item">Football</li>
        <li className="profile__item">Travel</li>
        <li className="profile__item">Music</li>
      </ul>
      <img src={smiles} alt="smiles" className="profile__smiles" />
    </div>
  );
};

export default Profile;

/* allow_password_change: false
avatar: {url: null, normal: {…}, small_thumb: {…}}
client: "3q44XAf6nNVTBf63UjsmbA"
email: "flavia.cohen@rootstrap.com"
first_name: ""
gender: null
id: 1457
last_name: ""
provider: "email"
push_token: null
token: "VqrEKk6S6wWSCNNV4nAmJQ"
uid: "flavia.cohen@rootstrap.com"
username: "" */
