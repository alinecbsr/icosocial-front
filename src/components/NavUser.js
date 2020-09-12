import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import { userPersonType } from '../auth';

import logo from '../assets/image/logo1.svg';

export default function NavUser() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));

  function handleLogout() {
    localStorage.clear();

    history.push('/signin');
  }

  return (
    <header className="user">
      <nav className="user_nav">
        <div className="user_nav-right">
          <img src={logo} alt="logo icósocial" />
        </div>
        <span>Bem vindo, {user.name}</span>
        <div className="user_nav-left">
          <Link
            className="user_nav-left-link"
            to={userPersonType() ? '/user/profilepj' : '/user/profilepf'}
          >
            Meu perfil
          </Link>
          <a
            className="fixedNav_doe-now"
            href="https://pagseguro.uol.com.br/#rmcl"
            target="_blank"
          >
            Doe agora
          </a>
          <button type="button" onClick={handleLogout}>
            <FiPower size={18} color="#82368C" />
          </button>
        </div>
      </nav>
    </header>
  );
}
