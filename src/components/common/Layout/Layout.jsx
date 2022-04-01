import React from 'react';
import Header from '../Header/Header';
import PhoneAppSection from '../PhoneAppSection/PhoneAppSection';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <PhoneAppSection />
    </>
  );
};

export default Layout;
