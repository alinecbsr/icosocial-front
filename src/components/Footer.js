import React from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiDollarSign,
} from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">Contate-nos</h2>
        <p className="footer__message">
          Abrace esta causa, participe, siga e compartilhe!
        </p>
        <nav className="footer__contacts">
          <ul className="footer__contacts--list">
            <li className="footer__contacts--item">
              <div className="footer__contacts--item-container">
                <FiMail size={24} />
              </div>

              <h6>Email</h6>
              <p>atendimento@icosocial.com</p>
            </li>
            <li className="footer__contacts--item">
              <div className="footer__contacts--item-container">
                <FiPhone size={24} />
              </div>

              <h6>Telefone</h6>
              <p>(81) 3525-8878</p>
            </li>
            <li className="footer__contacts--item">
              <div className="footer__contacts--item-container">
                <FiMapPin size={24} />
              </div>

              <h6>Endereço</h6>
              <p>Rua Antônio, N 10, Recife - PE</p>
            </li>
            <li className="footer__contacts--item">
              <div className="footer__contacts--item-container">
                <FiInstagram size={24} />
              </div>

              <h6>Instagram</h6>
              <p>@username</p>
            </li>
            <li className="footer__contacts--item">
              <div className="footer__contacts--item-container">
                <FiDollarSign size={24} />
              </div>

              <h6>Doações</h6>
              <p>@username</p>
            </li>
          </ul>
        </nav>
      </div>
      <p className="footer__copyright">
        &copy; Copyright - Todos os direitos reservados | ONG - Icósocial
      </p>
    </footer>
  );
}

export default Footer;
