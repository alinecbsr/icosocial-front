import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import logo from '../../assets/image/logo1.svg';

import api from '../../services/api';

export default function RegisterConfirmation() {
  const email = localStorage.getItem('user.email');

  async function handleResendEmail(e) {
    e.preventDefault();

    await api.post(`/email/resend/${email}`);

    ToastsStore.success('Email reenviado!', 5000, 'toast');
  }

  return (
    <div className="confirmation">
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
      <div className="confirmation_record">
        <section className="confirmation_record-zone1">
          <div className="confirmation_record-zone1-1fig">
            <img src={logo} alt="logo icósocial" />
          </div>
          <Link className="back" to="/">
            <FiArrowLeft size={20} color="#B537FF" />
            Voltar para Home
          </Link>
        </section>
        <section className="confirmation_record-zone2">
          <h3>Obrigado!</h3>
          <p>
            Dentro de instantes, você receberá um e-mail para confirmar seu
            registro. Acesse o link no e-mail enviado e conecte-se conosco!
          </p>
          <Link
            to="confirmation"
            onClick={(e) => {
              handleResendEmail(e);
            }}
          >
            <MdEmail size={20} color="#FFFFFF" />
            Reenviar email
          </Link>
        </section>
        <div className="confirmation_record-bl">
          <Link to="/">
            <FiArrowLeft size={20} color="#B537FF" />
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}
