import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/image/logo1.svg';
import google from '../../assets/image/google.svg';
import facebook from '../../assets/image/facebook.svg';

export default function Login() {
  return (
    <div className="tela">
      <form className="login">
        <h3 className="login_title">login</h3>
        <input
          className="login_input"
          id="email"
          type="text"
          placeholder="email"
        />
        <input
          className="login_input"
          id="password"
          type="password"
          placeholder="senha"
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
