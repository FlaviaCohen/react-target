import React from 'react';
import useAuth from 'hooks/useAuth';
import Map from 'components/common/Map/Map';
import PhoneAppSection from 'components/common/PhoneAppSection/PhoneAppSection';
import Header from '../Header/Header';

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
