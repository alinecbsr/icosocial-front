import React from 'react';
import Footer from '../../components/Footer';
import NavUser from '../../components/NavUser';
import HeroUser from '../../components/HeroUser';

export default function UserHome() {
  return (
    <>
      <div className="main">
        <NavUser />
        <HeroUser />
      </div>
      <Footer />
    </>
  );
}
