import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import logo from '../../assets/image/logo1.svg';

import api from '../../services/api';

import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';

export default function Register() {
  const [selectedOption, setSelectedOption] = useState(false);

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const history = useHistory();

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (password !== confirmationPassword) {
      ToastsStore.error('Password does not match', 5000, 'toast');
      return;
    }

    if (!selectedOption) {
      ToastsStore.error('Person is not informed', 5000, 'toast');
      return;
    }

    const data = {
      login,
      name,
      password,
      person: selectedOption,
    };

    const response = await api.post('/users', data);

    if (response.data.error) {
      ToastsStore.error(
        capitalizeFirstLetter(response.data.error),
        5000,
        'toast'
      );
    }

    if (response.data.messages) {
      response.data.messages.forEach((error) => {
        error.errors.forEach((msg) => {
          ToastsStore.error(capitalizeFirstLetter(msg), 5000, 'toast');
        });
      });
    }

    if (response.data.error == null) {
      localStorage.setItem('user.email', response.data.login);
      history.push('/signup/confirmation');
      setSelectedOption('');
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
          <ToastsContainer
            store={ToastsStore}
            position={ToastsContainerPosition.TOP_RIGHT}
          />
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
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
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
                  value="PHYSICAL"
                  checked={selectedOption === 'PHYSICAL'}
                  onChange={(e) => handleOptionChange(e)}
                />
                Pessoa física
              </label>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  value="LEGAL"
                  checked={selectedOption === 'LEGAL'}
                  onChange={(e) => handleOptionChange(e)}
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
