import React from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/swiper.scss';

const Hero = () => {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <>
      <header>
    <figure>
      <img src="" alt=""/>
    </figure>
    <div>
      <button></button>
      <button></button>
    </div>
      </header>
      <Swiper {...params}>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    </>
  )
};

export default Hero;