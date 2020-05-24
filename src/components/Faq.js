import React from 'react';
import PropTypes from 'prop-types';

import faqs from '../helpers/faq-list';

function Faq({ rfs }) {
  return (
    <section ref={rfs} className="container">
      <div className="faq">
        <h2 className="faq_header">faq</h2>
        <div className="faq_list">
          {faqs.map((faq) => (
            <li className="faq_list-item" key={Math.random()}>
              <details className="faq_list-details">
                <summary className="faq_list-question">{faq.question}</summary>
                <p className="faq_list-answer">{faq.answer}</p>
              </details>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}

Faq.propTypes = {
  rfs: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Faq;
