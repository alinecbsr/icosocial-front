import React from 'react';
import participate from '../assets/image/participate.svg';

function Participate(props) {
  return (
    <section ref={props.rfs} className="container">
      <h2>Participe</h2>
      <div className="participate">
        <img className="participate_abt" src={participate} alt="figure" />
        <article className="participate_article1">
          <p className="participate_article1-text1">
            “Vestibulum sit amet massa vulputate, pulvinar sapien at,
            sollicitudin metus. Praesent metus ipsum, gravida non libero at,
            pulvinar porttitor felis. Morbi diam turpis, lobortis vel dictum
            sed, pulvinar id libero. Aenean neque nulla”
          </p>
          <p className="participate_article1-text2"> Someone (ONG Volunteer)</p>
          <button
            className="participate_article1-btn-participate"
            type="submit"
          >
            Seja um voluntário
          </button>
        </article>
        <article className="participate_article2">
          <p className="participate_article2-text1">
            “Vestibulum sit amet massa vulputate, pulvinar sapien at,
            sollicitudin metus. Praesent metus ipsum, gravida non libero at,
            pulvinar porttitor felis. Morbi diam turpis, lobortis vel dictum
            sed, pulvinar id libero. Vestibulum sit amet massa vulputate,
            pulvinar sapien at, sollicitudin metus. Praesent metus ipsum,
            gravida non libero at, pulvinar porttitor felis. Morbi diam turpis,
            lobortis vel dictum sed, pulvinar id libero. Aenean neque nulla
            Vestibulum sit amet massa vulputate, pulvinar sapien at,
            sollicitudin metus. Praesent metus ipsum, gravida non libero at,
            pulvinar porttitor felis. Morbi diam turpis, lobortis vel dictum
            sed, pulvinar id libero. Aenean neque nulla”
          </p>
          <button
            className="participate_article2-btn-participate"
            type="submit"
          >
            Seja um doador
          </button>
        </article>
      </div>
    </section>
  );
}

export default Participate;
