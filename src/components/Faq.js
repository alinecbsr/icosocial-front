import React from 'react';

function Faq() {
  const faqs = [
    {
      question: 'Is this thing on?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc.',
    },
  ];

  return (
    <section className="container">
      <div className="faq">
        <header className="faq_header">
          <h2>faq</h2>
        </header>

        <div className="faq_list">
          {faqs.map((faq) => (
            <li className="faq_item" key={Math.random()}>
              <details className="faq_details">
                <summary className="faq_question">{faq.question}</summary>
                <p className="faq_answer">{faq.answer}</p>
              </details>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Faq;
