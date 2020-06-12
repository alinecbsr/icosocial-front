import React from 'react';
import PropTypes from 'prop-types';

import figure from '../assets/image/imgWhy.svg';
import school from '../assets/image/icon-school.svg';
import income from '../assets/image/icon-public.svg';
import money from '../assets/image/icon-money.svg';

function WhyWeDo({ rfs }) {
  return (
    <section ref={rfs} className="container">
      <h2>Por quem fazemos</h2>
      <div className="who">
        <article className="who_article">
          <p className="who_article-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lacinia, justo sit amet luctus pretium, purus ex facilisis lorem,
            rutrum bibendum quam lectus viverra libero. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec in scelerisque felis. Nam
            erat risus, dignissim a eros quis, lacinia sodales magna. Vivamus
            accumsan risus in elit auctor condimentum a tempus lorem. Morbi sit
            amet maximus urna. Etiam ac diam tincidunt, convallis neque et,
            pharetra metus. Vivamus vulputate facilisis nulla et euismod.
          </p>
        </article>

        <div className="weDo">
          <div className="zone">
            <img className="zone_img" src={school} alt="icon data" />
            <p className="zone_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              congue quis justo et ultricies. Etiam posuere nisl velit, eget
              dictum felis porttitor ac. Aenean leo dui, consectetur ut cursus
              non, blandit id leo. Aliquam tincidunt maximus risus quis
              pellentesque
            </p>
            <p className="zone_number">100%</p>
            <p className="zone_subtitle">Adesão</p>
            <p className="zone_subtitle">escolar</p>
          </div>

          <div className="zone">
            <img className="zone_img" src={income} alt="icon data" />
            <p className="zone_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              congue quis justo et ultricies. Etiam posuere nisl velit, eget
              dictum felis porttitor ac. Aenean leo dui, consectetur ut cursus
              non, blandit id leo. Aliquam tincidunt maximus risus quis
              pellentesque
            </p>
            <p className="zone_number">95%</p>
            <p className="zone_subtitle">Escolas</p>
            <p className="zone_subtitle">públicas</p>
          </div>

          <div className="zone">
            <img className="zone_img" src={money} alt="icon data" />
            <p className="zone_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              congue quis justo et ultricies. Etiam posuere nisl velit, eget
              dictum felis porttitor ac. Aenean leo dui, consectetur ut cursus
              non, blandit id leo. Aliquam tincidunt maximus risus quis
              pellentesque
            </p>
            <p className="zone_number">85%</p>
            <p className="zone_subtitle">Baixa</p>
            <p className="zone_subtitle">renda</p>
          </div>
        </div>

        <div className="why">
          <p className="why_text">Não ser indiferente, faz toda a diferença!</p>
          <img className="why_img" src={figure} alt="figure" />
        </div>
      </div>
    </section>
  );
}

WhyWeDo.propTypes = {
  rfs: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WhyWeDo;
