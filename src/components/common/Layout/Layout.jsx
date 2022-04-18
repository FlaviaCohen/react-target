import React from 'react';
import Header from '../Header/Header';
import useAuth from 'hooks/useAuth';
import Map from 'components/common/Map/Map';
import PhoneAppSection from 'components/common/PhoneAppSection/PhoneAppSection';

const Layout = ({ children }) => {
  const { authenticated } = useAuth();

  return (
    <>
      <Header />
      {children}
      {authenticated ? (
        <div className="map">
          <Map />
        </div>
      ) : (
        <PhoneAppSection />
      )}
    </>
  );
};

export default Layout;
