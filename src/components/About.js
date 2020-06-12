import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Definition from './Definitions';
import OurStory from './OurStory';

import figure from '../assets/image/imgAbout.svg';

function About({ rfs }) {
  const [showKnowMore, setShowKnowMore] = useState(false);

  function openKnowMore(e) {
    e.preventDefault();
    setShowKnowMore(!showKnowMore);
  }

  return (
    <>
      <section ref={rfs} className="container">
        <h2 className="about_article-title-mob">Sobre nós</h2>
        <div className="about">
          <article className="about_article">
            <h2 className="about_article-title">Sobre nós</h2>
            <p className="about_article-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              congue quis justo et ultricies. Etiam posuere nisl velit, eget
              dictum felis porttitor ac. Aenean leo dui, consectetur ut cursus
              non, blandit id leo. Aliquam tincidunt maximus risus quis
              pellentesque. Morbi elit diam, facilisis ac mi nec, tristique
              interdum erat. Nunc tincidunt ante vitae ante venenatis vulputate.
              Integer nec laoreet mi. Nam laoreet maximus elit, sit amet commodo
              lectus scelerisque sit amet. Proin non mi euismod, fringilla
              mauris eget, placerat nisl. Curabitur quis gravida sapien, nec
              mattis mauris. Morbi vel commodo nisl. Sed tincidunt imperdiet
              dignissim...
            </p>
            <button
              onClick={openKnowMore}
              className="about_article-btn-about"
              type="submit"
            >
              Saiba mais
            </button>
          </article>
          <img className="about_abt" src={figure} alt="figure" />
        </div>
      </section>
      <Definition show={showKnowMore} />
      <OurStory show={showKnowMore} />
    </>
  );
}

About.propTypes = {
  rfs: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default About;
