/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../assets/image/logo1.svg';

import api from '../services/api';

export default function ProfilePJ() {
  const [name, setName] = useState('');
  const [fantasy, setFantasy] = useState('');
  const [cnpj, setCNPJ] = useState('');
  const [cel, setCel] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCEP] = useState('');
  const [uf, setUF] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  const history = useHistory();

  async function handleProfilePF(e) {
    e.preventDefault();

    const data = {
      name,
      fantasy,
      cnpj,
      cel,
      phone,
      email,
      cep,
      uf,
      country,
      street,
      number,
      complement,
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
    <div className="profile">
      <div className="profile_content">
        <section className="profile_content-zone1">
          <img src={logo} alt="logo icósocial" />
          <h3>Meu Perfil</h3>
          <Link className="password" to="/">
            Alterar minha senha
          </Link>
          <div className="back">
            <Link className="back_to" to="/">
              <FiArrowLeft size={20} color="#B537FF" />
              Voltar para Home
            </Link>
          </div>
        </section>
        <section className="profile_content-zone2">
          <form
            className="profile_content-zone2-form1"
            onSubmit={handleProfilePF}
          >
            <input
              placeholder="Nome da empresa"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="profile_content-zone2-form1-1">
              <input
                className="profile_content-zone2-form1-1-1"
                placeholder="Nome fantasia"
                value={fantasy}
                onChange={(e) => setFantasy(e.target.value)}
              />
              <input
                className="profile_content-zone2-form1-1-2"
                placeholder="CNPJ"
                value={cnpj}
                onChange={(e) => setCNPJ(e.target.value)}
              />
            </div>

            <div className="profile_content-zone2-form1-1">
              <input
                className="profile_content-zone2-form1-1-3"
                placeholder="Celular"
                value={cel}
                onChange={(e) => setCel(e.target.value)}
              />
              <input
                className="profile_content-zone2-form1-1-4"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="profile_content-zone2-form1-1">
              <input
                className="profile_content-zone2-form1-1-1"
                type="Email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="profile_content-zone2-form1-1-2"
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCEP(e.target.value)}
              />
            </div>

            <div className="profile_content-zone2-form1-1">
              <input
                className="profile_content-zone2-form1-1-5"
                placeholder="UF"
                value={uf}
                onChange={(e) => setUF(e.target.value)}
              />
              <input
                className="profile_content-zone2-form1-1-6"
                placeholder="Cidade"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <input
              placeholder="Logradouro"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <div className="profile_content-zone2-form1-1">
              <input
                className="profile_content-zone2-form1-1-5"
                placeholder="Numero"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                className="profile_content-zone2-form1-1-6"
                placeholder="Complemento"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </div>
          </form>
          <form
            className="profile_content-zone2-form2"
            onSubmit={handleProfilePF}
          >
            <button className="button" type="submit">
              Salvar
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
