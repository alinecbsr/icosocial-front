import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const list = [
    {
      item: 'Sobre nós',
      link: '/about_us',
    },
    {
      item: 'O que fazemos',
      link: '#what_we_do',
    },
    {
      item: 'Por quem fazemos',
      link: '#why_we_do',
    },
    {
      item: 'Participe',
      link: '#participate',
    },
    {
      item: 'Parceiros',
      link: '#partners',
    },
    {
      item: 'FAQ',
      link: '#faq',
    },
  ];

  return (
    <section className="container">
      <nav className="nav">
        <ul className="nav_list">
          {list.map((item) => (
            <li className="nav_list-item" key={Math.random()}>
              <Link className="nav_list-item" to={item.link}>
                {item.item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default About;
