/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import cocaCola from '../assets/image/logomarcas/coca-cola.png';
import facebook from '../assets/image/logomarcas/facebook.png';
import globo from '../assets/image/logomarcas/globo.png';
import guaranaAntartica from '../assets/image/logomarcas/guarana-logo-antartica.png';
import pivotal from '../assets/image/logomarcas/pivotal.png';
import rocketseat from '../assets/image/logomarcas/rocketseat.jpg';

function Partners(props) {
  const images = [
    cocaCola,
    facebook,
    globo,
    guaranaAntartica,
    pivotal,
    rocketseat,
  ];
  const [thumbnails, setThumnails] = useState([]);
  const [previousSlideStyle, setPreviousSlideStyle] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideStyle, setNextSlideStyle] = useState({});
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  useEffect(() => {
    setThumnails(images);
    setCurrentSlideStyle({
      backgroundImage: `url('${images[currentSlide]}')`,
    });

    if (currentSlide > 0) {
      setPreviousSlideStyle({
        backgroundImage: `url('${images[currentSlide - 1]}')`,
      });
    } else {
      setPreviousSlideStyle({
        backgroundImage: `url('${images[images.length - 1]}')`,
      });
    }

    if (currentSlide === images.length - 1) {
      setNextSlideStyle({
        backgroundImage: `url('${images[0]}')`,
      });
    } else {
      setNextSlideStyle({
        backgroundImage: `url('${images[currentSlide + 1]}')`,
      });
    }
  }, [images, currentSlide]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(thumbnails.length - 1);
    }
  }

  function next() {
    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <>
      <section ref={props.rfs} className="slideshow container">
        <h2>Parceiros</h2>
        <div className="slide-holder">
          <section className="slide previous-slide">
            <div style={previousSlideStyle} className="slide-thumbnail" />
          </section>
          <section className="slide current-slide">
            <div style={currentSlideStyle} className="slide-thumbnail" />
          </section>
          <section className="slide next-slide">
            <div style={nextSlideStyle} className="slide-thumbnail" />
          </section>
        </div>

        <div className="slideshow-controller">
          <button type="button" onClick={previous}>
            <FiChevronLeft size={30} />
          </button>
          <button type="button" onClick={next}>
            <FiChevronRight size={30} />
          </button>
        </div>
      </section>
    </>
  );
}

export default Partners;
