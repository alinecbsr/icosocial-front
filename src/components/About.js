import React from 'react';
import figure from '../assets/image/figure.svg';

function About() {
  return (
    <section className="container">
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_list-item">Sobre nós</li>
          <li className="nav_list-item">O que fazemos</li>
          <li className="nav_list-item">Por quem fazemos</li>
          <li className="nav_list-item">Parceiros</li>
          <li className="nav_list-item">Participe</li>
          <li className="nav_list-item">FAQ</li>
        </ul>
      </nav>
      <div className="main">
        <article className="main_article">
          <h2 className="main_article-title">Sobre nós</h2>
          <p className="main_article-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
            quis justo et ultricies. Etiam posuere nisl velit, eget dictum felis
            porttitor ac. Aenean leo dui, consectetur ut cursus non, blandit id
            leo. Aliquam tincidunt maximus risus quis pellentesque. Morbi elit
            diam, facilisis ac mi nec, tristique interdum erat. Nunc tincidunt
            ante vitae ante venenatis vulputate. Integer nec laoreet mi. Nam
            laoreet maximus elit, sit amet commodo lectus scelerisque sit amet.
            Proin non mi euismod, fringilla mauris eget, placerat nisl.
            Curabitur quis gravida sapien, nec mattis mauris. Morbi vel commodo
            nisl. Sed tincidunt imperdiet dignissim...
          </p>
        </article>

        <figure className="main_figure">
          <img className="main_figure-img" src={figure} alt="figure" />
        </figure>
      </div>
    </section>
  );
}

export default About;
