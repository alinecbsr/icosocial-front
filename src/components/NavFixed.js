import React, { Component } from 'react';
import { FiUser, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../assets/image/logo2.svg';

class NavFixed extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, ...props.rfs, visible: props.visible };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ visible: props.visible, ...props.rfs });
  }

  toggleMenu() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  goTo(item) {
    const { link } = item;

    if (link) {
      link.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    const {
      heroRef,
      aboutRef,
      byWhatRef,
      byWhoRef,
      partnersRef,
      participateRef,
      faqRef,
      open,
      visible,
    } = this.state;
    let className = 'fixedNav ';
    let showMenu;
    let menuBtn;

    if (open) {
      showMenu = '';
      menuBtn = <FiX size={20} />;
    } else {
      showMenu = 'menu_show';
      menuBtn = <FiMenu size={20} />;
    }

    const list = [
      {
        item: 'Sobre nós',
        link: aboutRef,
      },
      {
        item: 'O que fazemos',
        link: byWhatRef,
      },
      {
        item: 'Por quem fazemos',
        link: byWhoRef,
      },
      {
        item: 'Participe',
        link: participateRef,
      },
      {
        item: 'Parceiros',
        link: partnersRef,
      },
      {
        item: 'FAQ',
        link: faqRef,
      },
    ];

    if (!visible) {
      className = 'fixedNav hide-element';
    }

    return (
      <header className={className}>
        <img
          className="fixedNav_logo"
          src={logo}
          alt="Logo Icósocial"
          onClick={() => this.goTo({ link: heroRef })}
        />
        <nav className={`fixedNav_context ${showMenu}`}>
          <ul className="fixedNav_context-list">
            {list.map((item) => (
              <li
                className="fixedNav_context-list-item"
                key={Math.random()}
                onClick={() => this.goTo(item)}
              >
                {item.item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="fixedNav_btn">
          <Link className="fixedNav_btn-rgt" to="/signup">
            Cadastro
          </Link>
          <Link className="fixedNav_btn-lgn" to="/signin">
            <FiUser className="fixedNav_btn-lgn-icon" />
            Login
          </Link>
          <div className="fixedNav_doe">
            <a
              className="fixedNav_doe-now"
              href="https://pagseguro.uol.com.br/#rmcl"
              target="_blank"
            >
              Doe agora
            </a>
          </div>
          <div className="fixedNav_mobile">
            <button
              className="fixedNav_mobile-hamburger"
              onClick={this.toggleMenu}
              type="submit"
            >
              {menuBtn}
            </button>
          </div>
        </div>
      </header>
    );
  }
}

NavFixed.propTypes = {
  rfs: PropTypes.objectOf(PropTypes.any).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default NavFixed;
