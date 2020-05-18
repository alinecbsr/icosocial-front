/* eslint-disable react/prop-types */
import React from 'react';

function Definitions({ rfs }) {
  return (
    <section ref={rfs} className="container">
      <div className="define">
        <div className="card">
          <h2 className="card_title">Missão</h2>
          <p className="card_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
            quis justo et ultricies. Etiam posuere nisl velit, eget dictum felis
            porttitor ac. Aenean leo dui, consectetur ut cursus non, blandit id
            leo. Aliquam tincidunt maximus risus quis pellentesque.{' '}
          </p>
        </div>
        <div className="card">
          <h2 className="card_title">Visão</h2>
          <p className="card_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
            quis justo et ultricies. Etiam posuere nisl velit, eget dictum felis
            porttitor ac. Aenean leo dui, consectetur ut cursus non, blandit id
            leo. Aliquam tincidunt maximus risus quis pellentesque.{' '}
          </p>
        </div>
        <div className="card">
          <h2 className="card_title">Valores</h2>
          <p className="card_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
            quis justo et ultricies. Etiam posuere nisl velit, eget dictum felis
            porttitor ac. Aenean leo dui, consectetur ut cursus non, blandit id
            leo. Aliquam tincidunt maximus risus quis pellentesque.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Definitions;
