import Button from 'components/common/Button/Button';
import useTranslation from 'hooks/useTranslation';
import { useLogoutMutation } from 'services/auth/auth';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Home = () => {
  const t = useTranslation();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = () => logout().then(() => localStorage.removeItem('user'));

  return (
    <div className="home">
      <div className="home__welcome">
        <h1>{t('home.welcomeMsg')}</h1>
        <h2>{t('home.title')}</h2>
        <ul>
          <li>{t('home.descriptionItem1')}</li>
          <li>{t('home.descriptionItem2')}</li>
        </ul>
        <div className="home__logout">
          <Button handleClick={handleLogout} disabled={isLoading}>
            {t('home.logoutBtn')}
          </Button>
        </div>
      </div>
      <div>
        <MapContainer center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;
