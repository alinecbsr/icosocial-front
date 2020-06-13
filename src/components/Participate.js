import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import participate from '../assets/image/participate.svg';

function Participate({ rfs }) {
  return (
    <section ref={rfs} className="container">
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
          <Link className="participate_article1-btn-participate" to="/signup">
            Seja um voluntário
          </Link>
        </article>
        <article className="participate_article2">
          <p className="participate_article2-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lacinia, justo sit amet luctus pretium, purus ex facilisis lorem,
            rutrum bibendum quam lectus viverra libero. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec in scelerisque felis. Nam
            erat risus, dignissim a eros quis, lacinia sodales magna. Vivamus
            accumsan risus in elit auctor condimentum a tempus lorem. Morbi sit
            amet maximus urna. Etiam ac diam tincidunt, convallis neque et,
            pharetra metus. Vivamus vulputate facilisis nulla et euismod.
          </p>
          <Link className="participate_article2-btn-participate" to="/signup">
            Seja um doador
          </Link>
        </article>
      </div>
    </section>
  );
}

Participate.propTypes = {
  rfs: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Participate;
