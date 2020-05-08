import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import logo1 from '../assets/image/logo1.svg';
import figure from '../assets/image/figure.svg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Hero() {
  return (
    <AutoplaySlider
      play={false}
      organicArrows={false}
      cancelOnInteraction={false}
      interval={4000}
    >
      <div className="banner">
        <header>
          <nav className="banner_header">
            <Link className="banner_header-img" to="/">
              <img
                className="banner_header-img-logo"
                src={logo1}
                alt="Logo Icósocial"
              />
            </Link>
            <div className="banner_header-btn">
              <Link className="banner_header-btn-rgt" to="/.">
                Cadastro
              </Link>
              <Link className="banner_header-btn-lgn" to="/..">
                <FiUser className="banner_header-btn-lgn-icon" />
                Login
              </Link>
            </div>
          </nav>

          <div className="banner_main">
            <div>
              <p className="banner_main-text">
                Conectando pessoas...
                <br />
                Tansformando vidas!
              </p>
            </div>
            <img className="banner_main-img" src={figure} alt="figure" />
          </div>
        </header>
      </div>
      <div className="banner">
        <header>
          <nav className="banner_header">
            <Link className="banner_header-img" to="/">
              <img
                className="banner_header-img-logo"
                src={logo1}
                alt="Logo Icósocial"
              />
            </Link>
            <div className="banner_header-btn">
              <Link className="banner_header-btn-rgt" to="/.">
                Cadastro
              </Link>
              <Link className="banner_header-btn-lgn" to="/..">
                <FiUser className="banner_header-btn-lgn-icon" />
                Login
              </Link>
            </div>
          </nav>
          <div className="banner_main">
            <div>
              <p className="banner_main-text">
                Conectando pessoas...
                <br />
                Tansformando vidas!
              </p>
            </div>
            <img className="banner_main-img" src={figure} alt="figure" />
          </div>
        </header>
      </div>
      <div className="banner">
        <header>
          <nav className="banner_header">
            <Link className="banner_header-img" to="/">
              <img
                className="banner_header-img-logo"
                src={logo1}
                alt="Logo Icósocial"
              />
            </Link>
            <div className="banner_header-btn">
              <Link className="banner_header-btn-rgt" to="/.">
                Cadastro
              </Link>
              <Link className="banner_header-btn-lgn" to="/..">
                <FiUser className="banner_header-btn-lgn-icon" />
                Login
              </Link>
            </div>
          </nav>
          <div className="banner_main">
            <div>
              <p className="banner_main-text">
                Conectando pessoas...
                <br />
                Tansformando vidas!
              </p>
            </div>
            <img className="banner_main-img" src={figure} alt="figure" />
          </div>
        </header>
      </div>
    </AutoplaySlider>
  );
}

export default Hero;
