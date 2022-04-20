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
      {authenticated ? <Map /> : <PhoneAppSection />}
    </>
  );
};

export default Layout;
