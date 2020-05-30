import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/image/logo1.svg';

export default function RegisterConfirmation() {
  return (
    <div className="confirmation">
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
          <Link to="/">
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
