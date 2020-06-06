import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import api from '../services/api';

function ConfirmEmail() {
  const history = useHistory();
  const { email } = useParams();

  useEffect(() => {
    api
      .put('/accounts/active', { email })
      .then(() => ToastsStore.success('Sua conta está ativa', 3000, 'toast'))
      .catch((err) =>
        ToastsStore.error(
          `Falha ao ativar a sua conta, tente novamente! ${err}`,
          3000,
          'toast'
        )
      );
    setInterval(() => {
      history.push('/signin');
    }, 4000);
  });

  return (
    <div className="container-confirm">
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
      <h3>Sua Conta está ativa! Redirecionando para página de login...</h3>
      <div className="box">
        <FiCheck size={100} />
      </div>
    </div>
  );
}

export default ConfirmEmail;
