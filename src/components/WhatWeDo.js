import React from 'react';

function WhatWeDo(props) {
  return (
    <section ref={props.rfs} className="container">
      <h2>O que fazemos</h2>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        quis justo et ultricies. Etiam posuere nisl velit, eget dictum felis
        porttitor ac. Aenean leo dui, consectetur ut cursus non, blandit id leo.
        Aliquam tincidunt maximus risus quis pellentesque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nunc congue quis justo et ultricies.
        Etiam posuere nisl velit, eget dictum felis porttitor ac. Aenean leo
        dui, consectetur ut cursus non, blandit id leo. Aliquam tincidunt
        maximus risus quis pellentesque.
      </p>
      <section className="cards">
        <div className="cards_area">
          <div className="cards_area-image1" />
          <div className="cards_area-text1">
            <p className="cards_area-text1-single">Núcleo</p>
            <p className="cards_area-text1-single">Escolar</p>
          </div>
        </div>

        <div className="cards_area">
          <div className="cards_area-image2" />
          <div className="cards_area-text2">
            <p className="cards_area-text2-single">Núcleo</p>
            <p className="cards_area-text2-single">Inglês</p>
          </div>
        </div>

        <div className="cards_area">
          <div className="cards_area-image3" />
          <div className="cards_area-text1">
            <p className="cards_area-text1-single">Núcleo</p>
            <p className="cards_area-text1-single">Judô</p>
          </div>
        </div>

        <div className="cards_area">
          <div className="cards_area-image4" />
          <div className="cards_area-text2">
            <p className="cards_area-text2-single">Núcleo</p>
            <p className="cards_area-text2-single">Artes</p>
          </div>
        </div>

        <div className="cards_area">
          <div className="cards_area-image5" />
          <div className="cards_area-text1">
            <p className="cards_area-text1-single">Núcleo</p>
            <p className="cards_area-text1-single">Música</p>
          </div>
        </div>

        <div className="cards_area">
          <div className="cards_area-image6" />
          <div className="cards_area-text2">
            <p className="cards_area-text2-single">Núcleo</p>
            <p className="cards_area-text2-single">Integração</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WhatWeDo;
