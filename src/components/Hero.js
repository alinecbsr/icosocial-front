import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import Banner from './hero/Banner';

import logo1 from '../assets/image/logo1.svg';
import logo3 from '../assets/image/logo3.svg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Hero() {
  return (
    <div className="hero">
      <AutoplaySlider
        play={false}
        organicArrows={false}
        cancelOnInteraction={false}
        interval={3000}
      >
        <div className="banner">
          <Banner
            logo={logo1}
            gradientClass="banner-one-gradient"
            image="https://cdn.pixabay.com/photo/2014/04/05/11/40/connect-316638_960_720.jpg"
          >
            <div className="banner-one-main">
              <div>
                <p className="banner-one-main-text31">Conectando pessoas...</p>
                <p className="banner-one-main-text32">Tansformando vidas!</p>
              </div>
            </div>
          </Banner>
        </div>
        <div className="banner">
          <Banner
            logo={logo3}
            gradientClass="banner-two-gradient"
            image="https://cdn.pixabay.com/photo/2014/04/02/14/48/children-306607_960_720.jpg"
          >
            <div className="banner-two-main">
              <p>
                <span className="banner-two-main-text1">
                  Conectando pessoas...
                </span>
                <span className="banner-two-main-text2">
                  Tansformando vidas!
                </span>
              </p>
            </div>
          </Banner>
        </div>
        <div className="banner">
          <Banner
            gradientClass="banner-three-gradient"
            logo={logo1}
            image="https://cdn.pixabay.com/photo/2014/11/22/17/58/clasped-hands-541849_960_720.jpg"
          >
            <div className="banner-three-main">
              <div>
                <p className="banner-three-main-text21">Juntos...</p>
                <p className="banner-three-main-text22">podemos</p>
                <p className="banner-three-main-text23">muito +</p>
                <p className="banner-three-main-text24">Junte-se a nós!</p>
              </div>
            </div>
          </Banner>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Hero;
