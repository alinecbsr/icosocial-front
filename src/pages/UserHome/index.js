import React from 'react';
import Footer from '../../components/Footer';
import NavUser from '../../components/NavUser';
import HeroUser from '../../components/HeroUser';
import Transparency from '../../components/Transparency';

export default function UserHome() {
  return (
    <>
      <div className="main">
        <NavUser />
        <HeroUser />
        <Transparency />
      </div>
      <Footer />
    </>
  );
}
