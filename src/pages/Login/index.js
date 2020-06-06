import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import api from '../../services/api';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';

import logo from '../../assets/image/logo1.svg';
import google from '../../assets/image/google.svg';
import facebook from '../../assets/image/facebook.svg';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const response = await api.post('auth', { login, password });

    if (response.data.error) {
      ToastsStore.error(response.data.error, 5000, 'toast');
    }

    if (response.data.messages) {
      response.data.messages.forEach((error) => {
        error.errors.forEach((msg) => {
          ToastsStore.error(capitalizeFirstLetter(msg), 5000, 'toast');
        });
      });
    }

    if (response.data.error == null) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      localStorage.removeItem('user.email');
      history.push('/dashboard');
    }
  }

  return (
    <div className="tela">
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
      <form className="login" onSubmit={handleLogin}>
        <h3 className="login_title">Login</h3>
        <input
          className="login_input"
          id="email"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Email"
        />
        <input
          className="login_input"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />

        <button className="button" type="submit">
          login
        </button>

        <Link className="login_link1" to="/">
          Esqueceu seu nome de usuário / senha?
        </Link>

        <p to="/">Ou faça login com</p>

        <div className="login_social">
          <Link className="login_social-btn" to="/">
            <img src={facebook} alt="logo facebook" />
            Facebook
          </Link>
          <Link className="login_social-btn" to="/">
            <img src={google} alt="logo google" />
            Google
          </Link>
        </div>

        <div className="login_back">
          <Link to="/">
            <FiArrowLeft size={20} color="#B537FF" />
            Voltar para Home
          </Link>
        </div>
      </form>

      <div className="login_img">
        <img src={logo} alt="logo icósocial" />
      </div>
    </div>
  );
}
