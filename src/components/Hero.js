import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import logo1 from '../assets/image/logo1.svg';
import logo2 from '../assets/image/logo2.svg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Hero() {
  return (
    <AutoplaySlider
      play
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={40000}
    >
      <div className="banner">
        <img src={logo1} alt="img 1" />
      </div>
      <div>
        <img src={logo2} alt="img 1" />
      </div>
    </AutoplaySlider>
  );
}

export default Hero;
