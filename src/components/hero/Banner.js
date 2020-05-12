import React from 'react';
import PropTypes from 'prop-types';

import NavBarHero from './NavBarHero';

function Banner({ image, children, logo, gradientClass }) {
  return (
    <>
      <img className="banner_img" src={image} alt="img Hero" />
      <header className={`banner_hero ${gradientClass}`}>
        <NavBarHero logo={logo} />
        {children}
      </header>
    </>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  gradientClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Banner;
