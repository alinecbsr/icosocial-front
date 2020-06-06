import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import logo from '../assets/image/logo1.svg';

export default function NavUser() {
  return (
    <header className="user">
      <nav className="user_nav">
        <div className="user_nav-right">
          <img src={logo} alt="logo icósocial" />
          <span>
            Bem vindo,
            {/* {' '}
          {Name} */}
          </span>
        </div>
        <div className="user_nav-left">
          <Link className="user_nav-left-link" to="/">
            Meu perfil
          </Link>
          <Link className="fixedNav_doe-now" to="/">
            Doe agora
          </Link>
          <button type="button">
            <FiPower size={18} color="#82368C" />
          </button>
        </div>
      </nav>
    </header>
  );
}
