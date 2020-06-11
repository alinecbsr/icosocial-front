/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import api from '../services/api';

import capitalizeFirstLetter from '../helpers/capitalizeFirstLetter';

export default function ChangePassword(props) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const history = useHistory();

  async function handleChangePassword(e) {
    e.preventDefault();

    if (newPassword !== confirmationPassword) {
      ToastsStore.error('Passwords are not the same', 5000, 'toast');
      return;
    }

    const data = {
      password: newPassword,
      oldPassword: currentPassword,
    };

    console.log(data);
    const response = await api.put('/users/passwd/update', data);

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
      history.push('/user/confirmation');
    }
  }

  const className = props.show ? '' : 'hide';

  return (
    <div id="modal" className={className}>
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
      <div className="content">
        <h3>Alteração de senha</h3>
        <form
          className="register_content-zone2-form1"
          onSubmit={handleChangePassword}
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
