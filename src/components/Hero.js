import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import logo1 from '../assets/image/logo1.svg';
import logo2 from '../assets/image/logo2.svg';
import figure from '../assets/image/figure.svg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Hero() {
  return (
    <AutoplaySlider
      play
      organicArrows={false}
      cancelOnInteraction={false}
      interval={4000}
    >
      <div className="banner">
        <div className="banner_header">
          <div className="banner_header-img">
            <img
              className="banner_header-logo"
              src={logo1}
              alt="Logo Icósocial"
            />
          </div>
          <div className="banner_header-btn">
            <button className="banner_header-btn--rgt" type="submit">
              Cadastro
            </button>
            <button className="banner_header-btn-lgn" type="submit">
              Login
            </button>
          </div>
        </div>
        <p className="banner_text">Texto</p>
        <figure className="banner_figure">
          <img className="banner_img" src={figure} alt="figure" />
        </figure>
      </div>
      <div>
        <img src={logo2} alt="img 1" />
      </div>
    </AutoplaySlider>
  );
}

export default Hero;
