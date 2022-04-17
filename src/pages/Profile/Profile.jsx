import Button from 'components/common/Button/Button';
import useTranslation from 'hooks/useTranslation';
import { useLogoutMutation } from 'services/auth/auth';
import Map from 'components/common/Map/Map';

const Profile = () => {
  // VER SI HAY QUE AGREGAR LOS CONDICIONALES QUE ESTAN EN SIGNUP Y LOGIN (USE AUTH)

  //const t = useTranslation();
  /*   const [logout, { isLoading }] = useLogoutMutation(); */

  /*   const handleLogout = () => logout().then(() => localStorage.removeItem('user')); */

  return (
    <div className="profile">
      <div className="profile__logout">
        {/*         <Button handleClick={handleLogout} disabled={isLoading}>
          {t('home.logoutBtn')}
        </Button> */}
        Hello profile
      </div>
      {/* 
      <div className="profile__map">
        <Map />
      </div> */}
    </div>
  );
};

export default Profile;
