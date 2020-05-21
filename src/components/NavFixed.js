/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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

  toggleMenu(event) {
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
      aboutRef,
      partnersRef,
      faqRef,
      heroRef,
      open,
      visible,
    } = this.state;
    let className = 'fixedNav ';
    let showMenu;
    let menuBtn;

    if (open) {
      showMenu = '';
      menuBtn = 'X';
    } else {
      showMenu = 'menu_show';
      menuBtn = '☰';
    }

    const list = [
      {
        item: 'Sobre nós',
        link: aboutRef,
      },
      {
        item: 'O que fazemos',
        link: null,
      },
      {
        item: 'Por quem fazemos',
        link: null,
      },
      {
        item: 'Participe',
        link: null,
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
          <Link className="fixedNav_btn-rgt" to="/.">
            Cadastro
          </Link>
          <Link className="fixedNav_btn-lgn" to="/..">
            <FiUser className="fixedNav_btn-lgn-icon" />
            Login
          </Link>
          <div className="fixedNav_doe">
            <Link className="fixedNav_doe-now" to="/.">
              Doe agora
            </Link>
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

export default NavFixed;
