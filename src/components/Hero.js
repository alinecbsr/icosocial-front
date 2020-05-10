import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import logo1 from '../assets/image/logo1.svg';
import logo3 from '../assets/image/logo3.svg';
import imgHero1 from '../assets/image/imgHero1.svg';
import imgHero2 from '../assets/image/imgHero2.svg';
import imgHero3 from '../assets/image/imgHero3.svg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Hero() {
  return (
    <div className="hero">
      <AutoplaySlider
        play
        organicArrows={false}
        cancelOnInteraction={false}
        interval={3000}
      >
        {/* slider 3 */}

        <div className="banner3">
          <img className="banner3_img" src={imgHero3} alt="img Hero" />
          <header className="banner3_hero">
            <nav className="banner3_header">
              <Link className="banner3_header-img" to="/">
                <img
                  className="banner3_header-img-logo"
                  src={logo3}
                  alt="Logo Icósocial"
                />
              </Link>
              <div className="banner3_header-btn">
                <Link className="banner3_header-btn-rgt" to="/.">
                  Cadastro
                </Link>
                <Link className="banner3_header-btn-lgn" to="/..">
                  <FiUser className="banner3_header-btn-lgn-icon" />
                  Login
                </Link>
              </div>
            </nav>
            <div className="banner3_main">
              <div>
                <p className="banner3_main-text31">Conectando pessoas...</p>
                <p className="banner3_main-text32">Tansformando vidas!</p>
              </div>
            </div>
          </header>
        </div>

        {/* slider 1 */}

        <div className="banner1">
          <img className="banner1_img" src={imgHero1} alt="img Hero" />
          <header className="banner1_hero">
            <div className="bgdp">
              <nav className="banner1_header">
                <Link className="banner1_header-img" to="/">
                  <img
                    className="banner1_header-img-logo"
                    src={logo3}
                    alt="Logo Icósocial"
                  />
                </Link>
                <div className="banner1_header-btn">
                  <Link className="banner1_header-btn-rgt" to="/.">
                    Cadastro
                  </Link>
                  <Link className="banner1_header-btn-lgn" to="/..">
                    <FiUser className="banner1_header-btn-lgn-icon" />
                    Login
                  </Link>
                </div>
              </nav>
              <div className="banner1_main">
                <div>
                  <p className="banner1_main-text1">Conectando pessoas...</p>
                  <p className="banner1_main-text2">Tansformando vidas!</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* slider 2 */}

        <div className="banner2">
          <img className="banner2_img" src={imgHero2} alt="img Hero" />
          <header className="banner2_hero">
            <nav className="banner2_header">
              <Link className="banner2_header-img" to="/">
                <img
                  className="banner2_header-img-logo"
                  src={logo1}
                  alt="Logo Icósocial"
                />
              </Link>
              <div className="banner2_header-btn">
                <Link className="banner2_header-btn-rgt" to="/.">
                  Cadastro
                </Link>
                <Link className="banner2_header-btn-lgn" to="/..">
                  <FiUser className="banner2_header-btn-lgn-icon" />
                  Login
                </Link>
              </div>
            </nav>
            <div className="banner2_main">
              <div>
                <p className="banner2_main-text21">Juntos...</p>
                <p className="banner2_main-text22">podemos</p>
                <p className="banner2_main-text23">muito +</p>
                <p className="banner2_main-text24">Junte-se a nós!</p>
              </div>
            </div>
          </header>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Hero;
