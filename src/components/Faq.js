import React from 'react';

function Faq({ rfs }) {
  const faqs = [
    {
      question: 'Is this thing on?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc.',
    },
    {
      question: 'Is this thing on?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc.',
    },
    {
      question: 'Is this thing on?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc.',
    },
    {
      question: 'Is this thing on?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc.',
    },
    {
      question: 'Is this thing on?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc.',
    },
    {
      question: 'Is this thing on?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc.',
    },
    {
      question: 'Is this thing on?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat m dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc.',
    },
  ];

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
export default Faq;
