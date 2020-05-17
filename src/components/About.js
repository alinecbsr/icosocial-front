import React from 'react';
import figure from '../assets/image/imgAbout.svg';

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
      <div className="about">
        <article className="about_article">
          <h2 className="about_article-title">Sobre nós</h2>
          <p className="about_article-text">
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
          <button className="about_article-btn-about" type="submit">
            Saiba mais
          </button>
        </article>
        <figure className="about_fig">
          <img className="about_fig-abt" src={figure} alt="figure" />
        </figure>
      </div>
    </section>
  );
}

export default About;
