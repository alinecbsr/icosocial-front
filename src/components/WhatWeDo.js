/* eslint-disable func-names */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Modal from './Modal';
import Conteudo01 from './inners/whatwedo/content01';
import Conteudo02 from './inners/whatwedo/content02';

function WhatWeDo(props) {
  const [showModal, setShowModal] = useState(false);
  const [activeContent, setActiveContent] = useState('');
  const conteudos = [<Conteudo01 />, <Conteudo02 />];

  const loadModalContent = function (index = 0) {
    setActiveContent(conteudos[index]);
    setShowModal(true);
  };

  const closeModal = function () {
    setShowModal(false);
  };

  return (
    <>
      <section ref={props.rfs} className="container">
        <h2>O que fazemos</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
          quis justo et ultricies. Etiam posuere nisl velit, eget dictum felis
          porttitor ac. Aenean leo dui, consectetur ut cursus non, blandit id
          leo. Aliquam tincidunt maximus risus quis pellentesque. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc congue quis justo et
          ultricies. Etiam posuere nisl velit, eget dictum felis porttitor ac.
          Aenean leo dui, consectetur ut cursus non, blandit id leo. Aliquam
          tincidunt maximus risus quis pellentesque.
        </p>
        <section className="cards">
          <div className="cards_area" onClick={() => loadModalContent(0)}>
            <div className="cards_area-image1" />
            <div className="cards_area-text1">
              <p className="cards_area-text1-single">Núcleo</p>
              <p className="cards_area-text1-single">Escolar</p>
            </div>
          </div>

          <div className="cards_area" onClick={() => loadModalContent(1)}>
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
      <Modal title="Meu modal" show={showModal} close={closeModal}>
        {activeContent}
      </Modal>
    </>
  );
}

export default WhatWeDo;
