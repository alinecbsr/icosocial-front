/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import api from '../../services/api';

import logo from '../../assets/image/logo1.svg';
import donor from '../../assets/image/donor.svg';
import voluntary from '../../assets/image/voluntary.svg';

export default function ProfileSelection() {
  const history = useHistory();

  async function handleType(e, typeDonor) {
    e.preventDefault();

    let data = {};
    if (typeDonor === 'DONOR') {
      data = { type: 'DONOR' };
    } else {
      data = { type: 'VOLUNTARY' };
    }

    const response = await api.put('/users/type', data);

    if (response.data.error) {
      ToastsStore.error(response.data.error, 5000, 'toast');
    }

    if (response.data.error == null) {
      localStorage.setItem('user.type', data.type);
      history.replace('/dashboard');
    }
  }

  return (
    <div className="selection">
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
      <div className="selection_record">
        <section className="selection_record-zone1">
          <div className="selection_record-zone1-1fig">
            <img src={logo} alt="logo icósocial" />
            <p>
              Neste primeiro acesso, é importante que você selecione a opção na
              qual deseja se conectar ao Icósocial
            </p>
          </div>
          <Link className="back" to="/">
            <FiArrowLeft size={20} color="#B537FF" />
            Voltar para Home
          </Link>
        </section>
        <section className="selection_record-zone2">
          <h3>Olá!</h3>
          <p>Para continuar, selecione o seu perfil:</p>
          <Link
            to="/profile-selector"
            onClick={(e) => {
              handleType(e, 'DONOR');
            }}
          >
            <img src={donor} alt="image donor" />
            Doador
          </Link>
          <Link
            to="/profile-selector"
            onClick={(e) => {
              handleType(e, 'VOLUNTARY');
            }}
          >
            <img src={voluntary} alt="image voluntary" />
            Voluntário
          </Link>
        </section>
        <div className="selection_record-bl">
          <Link to="/">
            <FiArrowLeft size={20} color="#B537FF" />
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}
