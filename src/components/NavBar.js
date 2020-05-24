import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ rfs }) {
  const { aboutRef, partnersRef, faqRef, participateRef, byWhoRef } = rfs;
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

NavBar.propTypes = {
  rfs: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NavBar;
