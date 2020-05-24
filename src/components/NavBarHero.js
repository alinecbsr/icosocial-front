import React from 'react';
import PropTypes from 'prop-types';

import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function NavBarHero({ logo }) {
  return (
    <nav className="banner_header">
      <div className="banner_header-container">
        <Link className="banner_header-img" to="/">
          <img
            className="banner_header-img-logo"
            src={logo}
            alt="Logo Icósocial"
          />
        </Link>
        <div className="banner_header-btn">
          <Link className="banner_header-btn-rgt" to="/">
            Cadastro
          </Link>
          <Link className="banner_header-btn-lgn" to="/">
            <FiUser className="banner_header-btn-lgn-icon" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

NavBarHero.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default NavBarHero;
