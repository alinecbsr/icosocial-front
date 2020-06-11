import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import api from '../../services/api';

function ConfirmEmail() {
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
  });

  return (
    <div className="container-confirm">
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
      <h3>Sua Conta está ativa!</h3>
      <div className="box">
        <FiCheck size={100} />
      </div>
      <NavLink to="/signin" className="confirm__link">
        Faça Login agora!
      </NavLink>
    </div>
  );
}

export default ConfirmEmail;
