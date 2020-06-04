/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../services/api';

export default function ChangePassword(props) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      currentPassword,
      newPassword,
      confirmationPassword,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Registration successful! Your access ID: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Error in registration, try again!');
    }
  }

  const className = props.show ? '' : 'hide';

  return (
    <div id="modal" className={className}>
      <div className="content">
        <h3>Alteração de senha</h3>
        <form
          className="register_content-zone2-form1"
          onSubmit={handleRegister}
        >
          <input
            type="password"
            placeholder="Senha atual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirme sua nova senha"
            value={confirmationPassword}
            onChange={(e) => setConfirmationPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Salvar
          </button>
          <a href="#" onClick={props.close}>
            <FiArrowLeft size={20} color="#B537FF" />
            Voltar para seu perfil
          </a>
        </form>
      </div>
    </div>
  );
}
