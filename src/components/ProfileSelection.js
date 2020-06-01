/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../assets/image/logo1.svg';
import donor from '../assets/image/donor.svg';
import voluntary from '../assets/image/voluntary.svg';

export default function ProfileSelection() {
  return (
    <div className="selection">
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
          <Link to="/">
            <img src={donor} alt="image donor" />
            Doador
          </Link>
          <Link to="/">
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
