import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Banner from './Banner';

import logo1 from '../assets/image/logo1.svg';
import logo3 from '../assets/image/logo3.svg';
import logo7 from '../assets/image/logo7.svg';
import imgHero1 from '../assets/image/imgHero1.svg';
import imgHero2 from '../assets/image/imgHero2.svg';
import imgHero3 from '../assets/image/imgHero3.svg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Hero(props) {
  return (
    <div ref={props.rfs} className="hero">
      <AutoplaySlider
        play
        organicArrows={false}
        cancelOnInteraction={false}
        interval={5000}
      >
        <div className="banner">
          <Banner
            logo={logo1}
            gradientClass="banner-one-gradient"
            image={imgHero1}
          >
            <div className="banner-one-main">
              <div>
                <p className="banner-one-main-text31">
                  Conectando pessoas e transformando vidas
                </p>
              </div>
            </div>
          </Banner>
        </div>

        <div className="banner">
          <Banner
            logo={logo3}
            gradientClass="banner-two-gradient"
            image={imgHero2}
          >
            <div className="banner-two-main">
              <p>
                <span className="banner-two-main-text1">
                  A boa educação, afetiva, direciona...
                </span>
                <span className="banner-two-main-text2">
                  inspira, transforma, torna-se efetiva!
                </span>
              </p>
            </div>
          </Banner>
        </div>

        <div className="banner">
          <Banner
            gradientClass="banner-three-gradient"
            logo={logo7}
            image={imgHero3}
          >
            <div className="banner-three-main">
              <div>
                <p className="banner-three-main-text22">
                  Junte-se a nós! Faça parte!
                </p>
              </div>
            </div>
          </Banner>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Hero;
