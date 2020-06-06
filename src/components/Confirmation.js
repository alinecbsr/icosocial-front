/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { FiArrowLeft, FiUserCheck } from 'react-icons/fi';

export default function Confirmation(props) {
  const className = props.show ? '' : 'hide';

  return (
    <div id="confirmation" className={className}>
      <div className="content">
        <a href="#">
          <FiUserCheck size={40} color="#FFF" />
        </a>
        <h3>Alterações feitas com sucesso!</h3>
        <a href="#" onClick={props.close}>
          <FiArrowLeft size={20} color="#FFF" />
          Voltar para seu perfil
        </a>
      </div>
    </div>
  );
}
