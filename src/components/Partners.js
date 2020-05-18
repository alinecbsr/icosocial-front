import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Partners({ images = [] }) {
  const [thumbnails, setThumnails] = useState([]);
  const [previousSlideStyle, setPreviousSlideStyle] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideStyle, setNextSlideStyle] = useState({});
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  const deg90 =
    '90deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0.5816701680672269) 100%';

  const deg280 =
    '280deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0.5816701680672269) 100%';

  useEffect(() => {
    setThumnails(images);
    setCurrentSlideStyle({
      backgroundImage: `url('${images[currentSlide]}')`,
    });

    if (currentSlide > 0) {
      setPreviousSlideStyle({
        backgroundImage: `linear-gradient(${deg90}), url('${
          images[currentSlide - 1]
        }')`,
      });
    } else {
      setPreviousSlideStyle({
        backgroundImage: `linear-gradient(${deg90}), url('${
          images[images.length - 1]
        }')`,
      });
    }

    if (currentSlide === images.length - 1) {
      setNextSlideStyle({
        backgroundImage: `linear-gradient(${deg280}), url('${images[0]}')`,
      });
    } else {
      setNextSlideStyle({
        backgroundImage: `linear-gradient(${deg280}), url('${
          images[currentSlide + 1]
        }')`,
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
    <section className="slideshow container">
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
  );
}

export default Partners;