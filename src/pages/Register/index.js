/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/image/logo1.svg';

import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [physical, setPhysical] = useState('');
  const [legal, setLegal] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      confirmationPassword,
      physical,
      legal,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Registration successful! Your access ID: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Error in registration, try again!');
    }
  }

  return (
    <div className="register">
      <div className="register_content">
        <section className="register_content-zone1">
          <img src={logo} alt="logo icósocial" />
          <h3>Cadastro</h3>
          <p>Faça parte, ajude pessoas a transformarem suas vidas.</p>
          <Link className="back" to="/">
            <FiArrowLeft size={20} color="#B537FF" />
            Voltar para Home
          </Link>
        </section>
        <section className="register_content-zone2">
          <form
            className="register_content-zone2-form1"
            onSubmit={handleRegister}
          >
            <input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="Email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirme sua senha"
              value={confirmationPassword}
              onChange={(e) => setConfirmationPassword(e.target.value)}
            />
          </form>
          <form
            className="register_content-zone2-form2"
            onSubmit={handleRegister}
          >
            <div className="group">
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  value={physical}
                  onChange={(e) => setPhysical(e.target.value)}
                />
                Pessoa física
              </label>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  value={legal}
                  onChange={(e) => setLegal(e.target.value)}
                />
                Pessoa jurídica
              </label>
            </div>
            <button className="button" type="submit">
              Cadastrar
            </button>
            <Link to="/">
              <FiArrowLeft size={20} color="#B537FF" />
              Voltar para Home
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}
