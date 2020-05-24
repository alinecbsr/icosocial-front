/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function NavBar({ rfs }) {
  const {
    aboutRef,
    /* partnersRef, */ faqRef,
    participateRef,
    byWhoRef,
    byWhatRef,
  } = rfs;
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
      link: null /* partnersRef, */,
    },
    {
      item: 'FAQ',
      link: faqRef,
    },
  ];

  const goTo = (item) => {
    const { link } = item;
    if (link) {
      link.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container">
      <nav className="nav">
        <ul className="nav_list">
          {list.map((item) => (
            <li
              className="nav_list-item"
              key={Math.random()}
              onClick={goTo.bind(this, item)}
            >
              {item.item}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default NavBar;
