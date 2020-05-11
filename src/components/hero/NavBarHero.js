import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function NavBarHero({ logo, prefixClass }) {
  return (
    <nav className={`${prefixClass}_header`}>
      <div className={`${prefixClass}_header-container`}>
        <Link className={`${prefixClass}_header-img`} to="/">
          <img
            className={`${prefixClass}_header-img-logo`}
            src={logo}
            alt="Logo Icósocial"
          />
        </Link>
        <div className={`${prefixClass}_header-btn`}>
          <Link className={`${prefixClass}_header-btn-rgt`} to="/.">
            Cadastro
          </Link>
          <Link className={`${prefixClass}_header-btn-lgn`} to="/..">
            <FiUser className={`${prefixClass}_header-btn-lgn-icon`} />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBarHero;
